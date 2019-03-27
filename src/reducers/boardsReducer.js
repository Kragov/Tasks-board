let defaultState = {};

if (localStorage.getItem("state") !== null) {
    defaultState = JSON.parse(localStorage.getItem("state"));
} else {
    defaultState = {
        boards: [],
        taskIdNumber: 0
    };
}

const boardsReducer = (state = defaultState, { type, payload }) => {
    if (type === "ADD_BOARD") {
        localStorage.setItem(
            "state",
            JSON.stringify({
                ...state,
                boards: [...state.boards, { boardName: payload, lists: [] }]
            })
        );
        return {
            ...state,
            boards: [...state.boards, { boardName: payload, lists: [] }]
        };
    }
    if (type === "ADD_LIST_TO_BOARD") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardName === payload.boardName);
        board.lists.push({
            listId: payload.listName + "-" + board.lists.length,
            listName: payload.listName,
            tasks: []
        });
        localStorage.setItem(
            "state",
            JSON.stringify({
                ...state,
                boards: boards
            })
        );

        return {
            ...state,
            boards: boards
        };
    }

    if (type === "ADD_TASK_TO_LIST") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardName === payload.boardName);

        let lists = board.lists;

        lists[payload.keyValue].tasks.push({
            taskId: payload.taskName + "-" + state.taskIdNumber,
            taskName: payload.taskName,
            isDone: false
        });

        localStorage.setItem(
            "state",
            JSON.stringify({
                ...state,
                boards: boards,
                taskIdNumber: ++state.taskIdNumber
            })
        );

        return {
            ...state,
            boards: boards,
            taskIdNumber: ++state.taskIdNumber
        };
    }

    if (type === "CHANGE_STATE") {
        let boards = state.boards.slice();

        let board = boards.find(item => item.boardName === payload.boardName);

        let lists = board.lists;

        let tasks = lists[payload.listKey].tasks;

        tasks[payload.taskKey] = {
            taskName: tasks[payload.taskKey].taskName,
            isDone: !tasks[payload.taskKey].isDone
        };
        localStorage.setItem(
            "state",
            JSON.stringify({
                ...state,
                boards: boards
            })
        );

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

            localStorage.setItem(
                "state",
                JSON.stringify({
                    ...state,
                    boards: boards
                })
            );

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

            localStorage.setItem(
                "state",
                JSON.stringify({
                    ...state,
                    boards: boards
                })
            );

            return {
                ...state,
                boards: boards
            };
        }
    }

    return state;
};

export default boardsReducer;
