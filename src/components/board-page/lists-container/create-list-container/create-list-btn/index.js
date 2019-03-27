import React from "react";

import './index.scss'

class CreateListBtn extends React.Component {
    render() {
        return (
            <div
                className="create-list-btn"
                onClick={this.props.changeCondition}
            >
                <h3>Add a list...</h3>
            </div>
        );
    }
}

export default CreateListBtn;
