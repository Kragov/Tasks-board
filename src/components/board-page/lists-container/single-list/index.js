import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import nanoid from "nanoid";

import { addTask } from "../../../../actions/tasksActions";
import { getTasks } from "../../../../selectors/";

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
        this.props.addTask(this.props.listID, this.state.taskName, "task" + nanoid());
    };

    render() {
        return (
            <div className="list-container">
                <h3 className="list-name">{this.props.listName}</h3>
                <form className="list-input" onSubmit={e => this.submitHanler(e)}>
                    <input
                        type="text"
                        onChange={e => this.setState({ taskName: e.target.value })}
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
                            {this.props.tasksIDs.map((item, index) => (
                                <Task
                                    boardID={this.props.boardID}
                                    listID={this.props.listID}
                                    taskID={this.props.tasks[item].taskID}
                                    taskName={this.props.tasks[item].taskName}
                                    indexForDraggable={index}
                                    key={index}
                                    isDone={this.props.tasks[item].isDone}
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
    return {
        tasksIDs: state.listsReducer.byID[props.listID].tasks,
        tasks: state.tasksReducer.byID
    };
};

export default connect(
    mapStateToProps,
    { addTask }
)(SingleList);
