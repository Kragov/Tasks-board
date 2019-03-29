import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import { addTask } from "../../../../actions/boardsActions";

import "./index.scss";

import Task from "./task/";

class SingleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
    }

    submitHanler = e => {
        e.preventDefault();
        this.props.addTask(
            this.props.boardID,
            this.state.taskName,
            this.props.listID
        );
    };

    render() {
        return (
            <div className="list-container">
                <h3 className="list-name">{this.props.listName}</h3>
                <form
                    className="list-input"
                    onSubmit={e => this.submitHanler(e)}
                >
                    <input
                        type="text"
                        onChange={e =>
                            this.setState({ taskName: e.target.value })
                        }
                    />
                    <input type="submit" />
                </form>

                <Droppable droppableId={this.props.listID}>
                    {provided => (
                        <div
                            className="droppable"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.props.tasks.map((item, index) => (
                                <Task
                                    boardID={this.props.boardID}
                                    listID={this.props.listID}
                                    taskID={item.taskID}
                                    taskName={item.taskName}
                                    indexForDraggable={index}
                                    key={index}
                                    isDone={item.isDone}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { tasks } = state.boardsReducer.boards.find(
        board => board.boardID === props.boardID
    ).lists.find(list => list.listID === props.listID);
    return { tasks };
};

export default connect(
    mapStateToProps,
    { addTask }
)(SingleList);
