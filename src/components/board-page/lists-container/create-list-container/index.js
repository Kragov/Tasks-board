import React from "react";

import CreateListBtn from "./create-list-btn/";
import CreateListInput from "./create-list-input/";

class CreateListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false
        };
    }

    changeCondition = () => {
        this.setState(state => ({ condition: !state.condition }));
    };

    render() {
        return !this.state.condition ? (
            <CreateListBtn changeCondition={this.changeCondition} />
        ) : (
            <CreateListInput
                boardID={this.props.boardID}
                changeCondition={this.changeCondition}
            />
        );
    }
}

export default CreateListContainer;
