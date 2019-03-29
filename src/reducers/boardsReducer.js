import { getLocalState } from "../localStorageActions/";

let defaultState = getLocalState();

if (defaultState === undefined) {
    defaultState = { boards: [], uniqID: 0 };
}

const boardsReducer = (state = defaultState, { type, payload }) => {
    if (type === "ADD_BOARD") {
        return {
            ...state,
            boards: [
                ...state.boards,
                {
                    boardID: payload + "-" + state.uniqID,
                    boardName: payload,
                    lists: []
                }
            ],
            uniqID: ++state.uniqID
        };
    }
    if (type === "ADD_LIST_TO_BOARD") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardID === payload.boardID);
        board.lists = [
            ...board.lists,
            {
                listID: payload.listName + "-" + board.lists.length,
                listName: payload.listName,
                tasks: []
            }
        ];

        return {
            ...state,
            boards: boards
        };
    }

    if (type === "ADD_TASK_TO_LIST") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardID === payload.boardID);

        let list = board.lists.find(item => item.listID === payload.listID);

        list.tasks = [
            ...list.tasks,
            {
                taskID: payload.taskName + "-" + state.uniqID,
                taskName: payload.taskName,
                isDone: false
            }
        ];
        return {
            ...state,
            boards: boards,
            uniqID: ++state.uniqID
        };
    }

    if (type === "CHANGE_STATE") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardID === payload.boardID);

        let list = board.lists.find(item => item.listID === payload.listID);

        let tasks = list.tasks.slice();

        let taskIndex = 0;
        tasks.find((item, index) => {
            if (item.taskID === payload.taskID) {
                return (taskIndex = index);
            }
        });

        tasks[taskIndex] = {
            taskID: tasks[taskIndex].taskID,
            taskName: tasks[taskIndex].taskName,
            isDone: !tasks[taskIndex].isDone
        };
        
        list.tasks = tasks;

        return {
            ...state,
            boards: boards
        };
    }

    if (type === "CHANGE_PLACE") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardID === payload.boardID);

        let lists = board.lists;

        const { destination, source, draggableId } = payload.result;

        if (!destination) {
            return { ...state };
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return { ...state };
        }

        const startList = lists.find(
            item => item.listID === source.droppableId
        );

        const finishList = lists.find(
            item => item.listID === destination.droppableId
        );

        if (startList === finishList) {
            const newTaskIds = startList.tasks;
            const draggableTask = newTaskIds.find(
                item => item.taskID === draggableId
            );

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableTask);

            return {
                ...state,
                boards: boards
            };
        } else {
            const startTaskIDs = startList.tasks;
            const draggableTask = startTaskIDs.find(
                item => item.taskID === draggableId
            );

            startTaskIDs.splice(source.index, 1);

            const finishTaskIDs = finishList.tasks;

            finishTaskIDs.splice(destination.index, 0, draggableTask);

            return {
                ...state,
                boards: boards
            };
        }
    }

    return state;
};

export default boardsReducer;
