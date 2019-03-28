import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { changeState } from "../../../../../actions/boardsActions";

import "./index.scss";
import { connect } from "react-redux";

class Task extends React.Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.taskId}
                index={this.props.taskKeyValue}
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
                                this.props.changeState(
                                    this.props.boardName,
                                    this.props.listName,
                                    this.props.taskName,
                                    this.props.listKeyValue,
                                    this.props.taskKeyValue
                                )
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
    { changeState }
)(Task);
