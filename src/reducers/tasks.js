import { getLocalStateTasks } from "../localStorageActions/";

let defaultState = getLocalStateTasks();

if (defaultState === undefined) {
    defaultState = { byID: {} };
}

const tasksReducer = (state = defaultState, { type, payload }) => {
    if (type === "ADD_TASK") {
        const tasks = state.byID;
        return {
            ...state,
            byID: {
                ...tasks,
                [payload.taskID]: {
                    taskID: payload.taskID,
                    taskName: payload.taskName,
                    isDone: false
                }
            }
        };
    }

    if (type === "CHANGE_COMPLETENESS") {
        const tasks = state.byID;
        const task = state.byID[payload];

        return {
            ...state,
            byID: {
                ...tasks,
                [payload]: {
                    ...task,
                    isDone: !state.byID[payload].isDone
                }
            }
        };
    }
    return state;
};

export default tasksReducer;
