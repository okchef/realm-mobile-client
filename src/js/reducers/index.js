import {combineReducers} from "redux";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    connectedToGameServer: false
};

function gameServerConnection(state = initialState, action) {
    switch (action.type) {
        case actionTypes.WS_CONNECTED_TO_GAMESERVER:
            return Object.assign({}, state, {
                connectedToGameServer: true
            });
        case actionTypes.WS_DISCONNECTED_FROM_GAMESERVER:
            return Object.assign({}, state, {
                connectedToGameServer: false
            });
        default:
            return state;
    }
}

export default combineReducers({
    gameServerConnection
});