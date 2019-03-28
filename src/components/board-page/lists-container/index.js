import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import "./index.scss";

import { changePlace } from "../../../actions/boardsActions";

import CreateListsContainer from "./create-list-container/";
import SingleList from "./single-list/";

class ListsContainer extends React.Component {
    onDragEnd = result => this.props.changePlace(result, this.props.boardName);

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="lists-container">
                    {this.props.lists.map((item, index) => (
                        <SingleList
                            listName={item.listName}
                            boardName={this.props.boardName}
                            key={index}
                            keyValue={index}
                            listId={item.listId}
                        />
                    ))}

                    <CreateListsContainer boardName={this.props.boardName} />
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { lists } = state.boardsReducer.boards.find(
        board => board.boardName === props.boardName
    );
    return { lists };
};

export default connect(
    mapStateToProps,
    { changePlace }
)(ListsContainer);
