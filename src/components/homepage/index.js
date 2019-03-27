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

                    {this.props.boards.map((item, index) => {
                        return (
                            <BoardBtn boardName={item.boardName} key={index} />
                        );
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { condition } = state.conditionReducer;
    const { boards } = state.boardsReducer;
    return { condition, boards };
};

export default connect(
    mapStateToProps,
    null
)(Home);
