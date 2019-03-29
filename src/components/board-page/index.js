import React from "react";
import { connect } from "react-redux";

import HomeBtn from "../homepage/home-button/";
import ListsContainer from "./lists-container/";

import "./index.scss";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardID: this.props.match.params.boardID
        };
    }

    render() {
        return (
            <>
                <HomeBtn />

                <div className="board-name">
                    <span>{this.state.boardID.replace(/([-])\w/, "")}</span>
                </div>
                <ListsContainer boardID={this.state.boardID} />
            </>
        );
    }
}
export default Board;
