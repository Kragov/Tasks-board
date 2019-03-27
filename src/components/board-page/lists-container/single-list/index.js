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
            this.props.boardName,
            this.state.taskName,
            this.props.keyValue
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

                <Droppable droppableId={this.props.listId}>
                    {provided => (
                        <div
                            className="droppable"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {/* <div className="tasks"> */}
                            {this.props.tasks.map((item, index) => (
                                <Task
                                    boardName={this.props.boardName}
                                    listName={this.props.listName}
                                    taskName={item.taskName}
                                    listKeyValue={this.props.keyValue}
                                    taskKeyValue={index}
                                    key={index}
                                    isDone={item.isDone}
                                    taskId={item.taskId}
                                />
                            ))}
                            {provided.placeholder}
                            {/* </div> */}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { tasks } = state.boardsReducer.boards.find(
        board => board.boardName === props.boardName
    ).lists[props.keyValue];
    return { tasks };
};

export default connect(
    mapStateToProps,
    { addTask }
)(SingleList);
