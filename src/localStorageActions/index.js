export const getLocalState = () => {
    if (localStorage.getItem("state") !== null) {
        return JSON.parse(localStorage.getItem("state"));
    }
};

export const saveStateToLocalStorage = state => {
    localStorage.setItem("state", JSON.stringify(state));
};
