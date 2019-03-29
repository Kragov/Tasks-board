import { getLocalState } from "../localStorageActions/";

let defaultState = getLocalState();

if (defaultState === null) {
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

        let board = boards.find(item => item.boardName === payload.boardName);
        board.lists = [
            ...board.lists,
            {
                listId: payload.listName + "-" + board.lists.length,
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

        let board = boards.find(item => item.boardName === payload.boardName);

        let lists = board.lists;

        lists[payload.keyValue].tasks = [
            ...lists[payload.keyValue].tasks,
            {
                taskId: payload.taskName + "-" + state.uniqID,
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

        let board = boards.find(item => item.boardName === payload.boardName);

        let lists = board.lists;

        let tasks = lists[payload.listKey].tasks.slice();

        tasks[payload.taskKey] = {
            taskId: tasks[payload.taskKey].taskId,
            taskName: tasks[payload.taskKey].taskName,
            isDone: !tasks[payload.taskKey].isDone
        };
        lists[payload.listKey].tasks = tasks;
        return {
            ...state,
            boards: boards
        };
    }

    if (type === "CHANGE_PLACE") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardName === payload.boardName);

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
            item => item.listId === source.droppableId
        );

        const finishList = lists.find(
            item => item.listId === destination.droppableId
        );

        if (startList === finishList) {
            const newTaskIds = startList.tasks;
            const draggableTask = newTaskIds.find(
                item => item.taskId === draggableId
            );

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableTask);

            return {
                ...state,
                boards: boards
            };
        } else {
            const startTaskIds = startList.tasks;
            const draggableTask = startTaskIds.find(
                item => item.taskId === draggableId
            );

            startTaskIds.splice(source.index, 1);

            const finishTaskIds = finishList.tasks;

            finishTaskIds.splice(destination.index, 0, draggableTask);

            return {
                ...state,
                boards: boards
            };
        }
    }

    return state;
};

export default boardsReducer;
