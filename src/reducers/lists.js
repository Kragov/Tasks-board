const defaultState = { byID: {} };

const listsReducer = (state = defaultState, { type, payload }) => {
    if (type === "ADD_LIST") {
        const lists = state.byID;
        return {
            ...state,
            byID: {
                ...lists,
                [payload.listID]: {
                    listID: payload.listID,
                    listName: payload.listName,
                    tasks: []
                }
            }
        };
    }

    if (type === "ADD_TASK") {
        const lists = state.byID;
        const list = state.byID[payload.listID];
        return {
            ...state,
            byID: {
                ...lists,
                [payload.listID]: {
                    ...list,
                    tasks: list.tasks.concat(payload.taskID)
                }
            }
        };
    }

    if (type === "CHANGE_PLACE") {
        const { destination, source, draggableId } = payload.result;
        const startListTasks = state.byID[source.droppableId].tasks.slice();
        const finishListTasks = state.byID[
            destination.droppableId
        ].tasks.slice();
        const lists = state.byID;
        const listFrom = state.byID[source.droppableId];
        const listTo = state.byID[destination.droppableId];

        if (!destination) {
            return { ...state };
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return { ...state };
        }

        if (source.droppableId === destination.droppableId) {
            startListTasks.splice(source.index, 1);
            startListTasks.splice(destination.index, 0, draggableId);

            return {
                ...state,
                byID: {
                    ...lists,
                    [source.droppableId]: {
                        ...listFrom,
                        tasks: startListTasks
                    }
                }
            };
        } else {
            startListTasks.splice(source.index, 1);
            finishListTasks.splice(destination.index, 0, draggableId);

            return {
                ...state,
                byID: {
                    ...lists,
                    [source.droppableId]: {
                        ...listFrom,
                        tasks: startListTasks
                    },
                    [destination.droppableId]: {
                        ...listTo,
                        tasks: finishListTasks
                    }
                }
            };
        }
    }
    return state;
};

export default listsReducer;
