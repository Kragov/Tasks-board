import React from "react";
import { connect } from "react-redux";
import nanoid from "nanoid";

import { addList } from "../../../../../actions/listsActions";

import "./index.scss";

class CreateListInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: ""
        };
    }

    submitHandler = listName => {
        this.props.addList(this.props.boardID, listName, this.id);
    };

    render() {
        return (
            <div className="create-list-input">
                <i
                    className="far fa-times-circle"
                    onClick={this.props.changeCondition}
                />
                <input
                    type="text"
                    placeholder="Add a list..."
                    onChange={e => {
                        this.setState({ listName: e.target.value });
                    }}
                />
                <div
                    className="submit"
                    onClick={() => {
                        this.props.addList(
                            this.props.boardID,
                            this.state.listName,
                            "list" + nanoid()
                        );
                    }}
                >
                    Submit
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addList }
)(CreateListInput);
