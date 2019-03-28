import { combineReducers } from "redux";

import conditionReducer from "./reducers/conditionReducer";
import boardsReducer from "./reducers/boardsReducer";

const rootReducer = combineReducers({
    conditionReducer,
    boardsReducer
});

export default rootReducer;
