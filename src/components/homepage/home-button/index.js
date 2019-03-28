import React from "react";
import KeyImage from "./home-btn.svg";
import { withRouter } from "react-router";

import "./index.scss";

class HomeBtn extends React.Component {
    clickHandler = () => {
        return this.props.history.push("/");
    };

    render() {
        return (
            <div onClick={() => this.clickHandler()}>
                <KeyImage className="home-btn" />
            </div>
        );
    }
}

export default withRouter(HomeBtn);
