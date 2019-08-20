import {combineReducers} from "redux";
import gameStateReducer from "./gameStateReducer";
import gameServerConnectionReducer from "./gameServerConnectionReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
    gameServerConnectionReducer,
    gameStateReducer,
    playerReducer
});