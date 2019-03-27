import React from "react";

import HomeBtn from "../homepage/home-button/";
import ListsContainer from "./lists-container/";

import "./index.scss";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardName: this.props.match.params.boardName
        };
    }

    render() {
        return (
            <>
                <HomeBtn />
                <div className="board-name">
                    <span>{this.state.boardName}</span>
                </div>
                <ListsContainer boardName={this.state.boardName}/>
            </>
        );
    }
}

export default Board;
