import { ADD_LIST, CHANGE_PLACE } from "../action-types/actionTypes";

export const addList = (boardID, listName, listID) => {
    return {
        type: ADD_LIST,
        payload: { boardID, listName, listID }
    };
};

export const changePlace = result => {
    return {
        type: CHANGE_PLACE,
        payload: { result }
    };
};
