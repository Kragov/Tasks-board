import React from "react";
import { connect } from "react-redux";

import HomeBtn from "./home-button/";
import CreateBoardBtn from "./create-board-btn";
import CreateBoardMenu from "./create-board-menu/";
import BoardBtn from "./board-btn/";

import "./index.scss";

class Home extends React.Component {
    render() {
        return (
            <>
                <HomeBtn />
                <div className="btns-container">
                    {this.props.condition ? (
                        <CreateBoardMenu />
                    ) : (
                        <CreateBoardBtn
                            onClick={() => this.props.setCondition()}
                        />
                    )}

                    {this.props.boardsIDs.map((item, index) => {
                        return (
                            <BoardBtn
                                boardName={this.props.boards[item].boardName}
                                boardID={item}
                                key={index}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { condition } = state.conditionReducer;
    return {
        condition,
        boards: state.boardsReducer.byID,
        boardsIDs: state.boardsReducer.allIDs
    };
};

export default connect(
    mapStateToProps,
    null
)(Home);
