import React from "react";
import "./index.scss";
import { connect } from "react-redux";

import { setCondition } from "../../../actions/conditionActions";

class CreateBoardBtn extends React.Component {
    render() {
        return (
            <div
                className="create-board-btn"
                onClick={() => this.props.setCondition()}
            >
                <h3>Create new board...</h3>
            </div>
        );
    }
}

export default connect(
    null,
    { setCondition }
)(CreateBoardBtn);
