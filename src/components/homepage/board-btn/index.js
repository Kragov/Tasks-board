import React from "react";
import "./index.scss";
import { withRouter } from "react-router";

class BoardBtn extends React.Component {
    clickHandler = () => {
        this.props.history.push(`/board${this.props.boardName}`);
    };

    render() {
        return (
            <div className="board-btn" onClick={this.clickHandler}>
                <h3>{this.props.boardName}</h3>
            </div>
        );
    }
}

export default withRouter(BoardBtn);
