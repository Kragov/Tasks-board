import { ADD_TASK, CHANGE_COMPLETENESS } from "../action-types/actionTypes";

export const addTask = (listID, taskName, taskID) => {
    return {
        type: ADD_TASK,
        payload: {
            listID,
            taskName,
            taskID
        }
    };
};

export const changeCompleteness = taskID => {
    return {
        type: CHANGE_COMPLETENESS,
        payload: taskID
    };
};
