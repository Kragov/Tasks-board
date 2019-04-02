import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { changeCompleteness } from "../../../../../actions/tasksActions";

import "./index.scss";
import { connect } from "react-redux";

class Task extends React.Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.taskID}
                index={this.props.indexForDraggable}
            >
                {provided => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={
                            !this.props.isDone
                                ? "task-container"
                                : "task-container task-done"
                        }
                        draggable="true"
                    >
                        <h3>{this.props.taskName}</h3>
                        <i
                            className="fas fa-check"
                            onClick={() =>
                                this.props.changeCompleteness(this.props.taskID)
                            }
                        />
                    </div>
                )}
            </Draggable>
        );
    }
}

export default connect(
    null,
    { changeCompleteness }
)(Task);
