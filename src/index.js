import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/homepage";
import Board from "./components/board-page/";
import rootReducer from "./rootReducer";

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <>
                <Route path="/" exact component={Home} />
                <Route path="/board:boardName" component={Board} />
            </>
        </Router>
    </Provider>,
    document.getElementById("root")
);

module.hot.accept();
