import React, {Component} from "react";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware} from "redux";

import webSocketMiddleware from "./middleware/webSocketMiddleware";
import rootReducer from "./reducers";
import RealmContainer from "./containers/RealmContainer";

import "../App.css";


export default class App extends Component {

    constructor() {
        super();

        this.store = createStore(
            rootReducer,
            applyMiddleware(thunkMiddleware, webSocketMiddleware)
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                <RealmContainer />
            </Provider>
        );
    }
}