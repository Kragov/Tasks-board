import { ADD_BOARD } from "../action-types/actionTypes";

export const addBoard = (boardName, boardID) => {
    return {
        type: ADD_BOARD,
        payload: { boardName, boardID }
    };
};
