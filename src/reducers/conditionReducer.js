const defaultState = {
    condition: false
};

const conditionReducer = (state = defaultState, { type }) => {
    if (type === "CHANGE_CONDITION") {
        return { ...state, condition: !state.condition };
    }

    return state;
};

export default conditionReducer;
