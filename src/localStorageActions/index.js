const boardsState = JSON.parse(localStorage.getItem("state"));

export const getLocalStateBoards = () => {
    if (boardsState !== null) {
        return boardsState.boardsReducer;
    }
};

export const getLocalStateLists = () => {
    if (boardsState !== null) {
        return boardsState.listsReducer;
    }
};

export const getLocalStateTasks = () => {
    if (boardsState !== null) {
        return boardsState.tasksReducer;
    }
};

export const saveStateToLocalStorage = state => {
    localStorage.setItem("state", JSON.stringify(state));
};
