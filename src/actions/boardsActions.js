export const addBoard = boardName => {
    return {
        type: "ADD_BOARD",
        payload: boardName
    };
};

export const addList = (boardID, listName) => {
    return {
        type: "ADD_LIST_TO_BOARD",
        payload: {
            boardID,
            listName
        }
    };
};

export const addTask = (boardID, taskName, listID) => {
    return {
        type: "ADD_TASK_TO_LIST",
        payload: {
            boardID,
            taskName,
            listID
        }
    };
};

export const changeState = (boardID, listID, taskID) => {
    return {
        type: "CHANGE_STATE",
        payload: {
            boardID,
            listID,
            taskID
        }
    };
};

export const changePlace = (result, boardID) => {
    return {
        type: "CHANGE_PLACE",
        payload: { result, boardID }
    };
};
