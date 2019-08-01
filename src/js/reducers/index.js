import {combineReducers} from "redux";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    connectedToGameServer: false,
    connecting: false
};

function gameServerConnection(state = initialState, action) {
    switch (action.type) {
        case actionTypes.WS_CONNECTED_TO_GAMESERVER:
            return Object.assign({}, state, {
                connecting: false,
                connectedToGameServer: true
            });
        case actionTypes.WS_DISCONNECTED_FROM_GAMESERVER:
            return Object.assign({}, state, {
                connecting: false,
                connectedToGameServer: false
            });
        case actionTypes.WS_CONNECT_TO_GAMESERVER:
            return Object.assign({}, state, {
                connecting: true
            });
        default:
            return state;
    }
}

export default combineReducers({
    gameServerConnection
});