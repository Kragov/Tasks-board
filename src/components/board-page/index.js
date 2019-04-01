import React from "react";

import HomeBtn from "../homepage/home-button/";
import ListsContainer from "./lists-container/";

import "./index.scss";

class Board extends React.Component {
    render() {
        return (
            <>
                <HomeBtn />
                <div className="board-name">
                    <span>{this.props.match.params.boardName}</span>
                </div>

                <ListsContainer boardID={this.props.location.state.boardID} />
            </>
        );
    }
}

export default Board;
