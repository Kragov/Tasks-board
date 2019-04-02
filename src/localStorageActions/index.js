export const saveStateToLocalStorage = state => {
    localStorage.setItem("state", JSON.stringify(state));
};
