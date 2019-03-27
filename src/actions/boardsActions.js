export const addBoard = boardName => {
    return {
        type: "ADD_BOARD",
        payload: boardName
    };
};

export const addList = (boardName, listName) => {
    return {
        type: "ADD_LIST_TO_BOARD",
        payload: {
            boardName,
            listName
        }
    };
};

export const addTask = (boardName, taskName, keyValue) => {
    return {
        type: "ADD_TASK_TO_LIST",
        payload: {
            boardName,
            taskName,
            keyValue
        }
    };
};

export const changeState = (
    boardName,
    listName,
    taskName,
    listKey,
    taskKey
) => {
    return {
        type: "CHANGE_STATE",
        payload: {
            boardName,
            listName,
            taskName,
            listKey,
            taskKey
        }
    };
};

export const changePlace = (result, boardName) => {
    return {
        type: "CHANGE_PLACE",
        payload: { result, boardName }
    };
};
