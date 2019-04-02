import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import "./index.scss";

import { changePlace } from "../../../actions/listsActions";
import {getLists} from '../../../selectors/'

import CreateListsContainer from "./create-list-container/";
import SingleList from "./single-list/";

class ListsContainer extends React.Component {
    onDragEnd = result => this.props.changePlace(result);

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="lists-container">
                    {this.props.lists.map((item, index) => (
                        <SingleList
                            listName={item.listName}
                            boardID={this.props.boardID}
                            key={index}
                            listID={item.listID}
                        />
                    ))}
                    <CreateListsContainer boardID={this.props.boardID} />
                </div>
            </DragDropContext>
        );
    }
}

const mapStateToProps = (state, props) => {

    return {
        lists: getLists(state, props)
    };
};

export default connect(
    mapStateToProps,
    { changePlace }
)(ListsContainer);
