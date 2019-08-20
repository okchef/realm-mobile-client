import * as actionTypes from "../actions/actionTypes";

const initialState = {
    connectedToGameServer: false,
    connecting: false,
    playerSessionId: null,
    playerId: null
};

export default function gameServerConnection(state = initialState, action) {
    switch (action.type) {
        case actionTypes.WS_CONNECTED_TO_GAMESERVER:
            return Object.assign({}, state, {
                connecting: false,
                connectedToGameServer: true,
                playerSessionId: action.playerSessionId,
                playerId: action.playerId
            });
        case actionTypes.WS_DISCONNECTED_FROM_GAMESERVER:
            return Object.assign({}, state, {
                connecting: false,
                connectedToGameServer: false,
                playerSessionId: null,
                playerId: null
            });
        case actionTypes.WS_CONNECT_TO_GAMESERVER:
            return Object.assign({}, state, {
                connecting: true
            });
        default:
            return state;
    }
}