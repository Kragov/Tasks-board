import React from "react";
import { connect } from "react-redux";
import nanoid from "nanoid";

import "./index.scss";

import { setCondition } from "../../../actions/conditionActions";
import { addBoard } from "../../../actions/boardsActions";

class CreateBoardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBoardName: "",
            inputError: ""
        };
    }

    render() {
        return (
            <div className="create-board-menu">
                <div className="menu-header">
                    <h3>Creating a board</h3>
                    <i
                        className="fas fa-times-circle"
                        onClick={() => this.props.setCondition()}
                    />
                </div>
                <div className="menu-input">
                    <span>What shall we call the board?</span>
                    <input
                        type="text"
                        onChange={e =>
                            this.setState({ newBoardName: e.target.value })
                        }
                    />
                    <p>{this.state.inputError}</p>
                    <div className="submit-btns">
                        <button
                            className="cancel-btn"
                            onClick={() => this.props.setCondition()}
                        >
                            CANCEL
                        </button>
                        <button
                            className="create-btn"
                            onClick={() => {
                                this.props.addBoard(
                                    this.state.newBoardName,
                                    "board" + nanoid()
                                );
                                this.props.setCondition();
                            }}
                        >
                            CREATE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { setCondition, addBoard }
)(CreateBoardMenu);
