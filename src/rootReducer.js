import { combineReducers } from "redux";

import conditionReducer from "./reducers/conditionReducer";
import boardsReducer from "./reducers/boards";
import listsReducer from "./reducers/lists";
import tasksReducer from "./reducers/tasks";

const rootReducer = combineReducers({
    conditionReducer,
    boardsReducer,
    listsReducer,
    tasksReducer
});

export default rootReducer;
