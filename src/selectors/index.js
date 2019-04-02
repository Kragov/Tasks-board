import { createSelector } from "reselect";

const getBoardListsIDs = (state, props) =>
    state.boardsReducer.byID[props.boardID].lists;

const getAllLists = state => Object.values(state.listsReducer.byID);

const getListsTasksIDs = (state, props) =>
    state.listsReducer.byID[props.listID].tasks;

const getAllTasks = state => Object.values(state.tasksReducer.byID);

export const getLists = createSelector(
    [getBoardListsIDs, getAllLists],
    (boardListsIDs, allLists) => {
        return allLists.filter(list => boardListsIDs.includes(list.listID));
    }
);

export const getTasks = createSelector(
    [getListsTasksIDs, getAllTasks],
    (listTasksIDs, allTasks) => {
        return allTasks.filter(task => listTasksIDs.includes(task.taskID));
    }
);
