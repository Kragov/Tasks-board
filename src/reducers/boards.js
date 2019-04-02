const defaultState = { byID: {} };

const boardsReducer = (state = defaultState, { type, payload }) => {
    if (type === "ADD_BOARD") {
        const boards = state.byID;
        return {
            ...state,
            byID: {
                ...boards,
                [payload.boardID]: {
                    boardID: payload.boardID,
                    boardName: payload.boardName,
                    lists: []
                }
            }
        };
    }

    if (type === "ADD_LIST") {
        const boards = state.byID;
        const board = state.byID[payload.boardID];
        return {
            ...state,
            byID: {
                ...boards,
                [payload.boardID]: {
                    ...board,
                    lists: board.lists.concat(payload.listID)
                }
            }
        };
    }

    return state;
};

export default boardsReducer;
