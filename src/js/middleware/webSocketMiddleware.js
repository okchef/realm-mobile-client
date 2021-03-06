import * as actionTypes from "../actions/actionTypes";
import {
    connectionToGameServerEstablished,
    connectionToGameServerTerminated,
    handleWsMessage
} from "../actions";

const wsMiddleware = () => {
    let webSocket = null;

    return store => next => action => {
        switch (action.type) {
            case actionTypes.WS_CONNECT_TO_GAMESERVER:
                if (webSocket != null) {
                    console.error("Attempting to connect when already connected.");
                    webSocket.close();
                }
                webSocket = new WebSocket("ws://192.168.0.17:8080/player");

                webSocket.onopen = (blargh) => {
                    // Do not update our status to open until we receive our first ACK message.
                    // This will be updated later, since this is dumb and gross.
                };
        
                webSocket.onmessage = (event) => {
                    const message = JSON.parse(event.data);
                    if (message && message.playerSessionId && message.playerId) {
                        store.dispatch(connectionToGameServerEstablished(message.playerId, message.playerSessionId));
                    } else {
                        store.dispatch(handleWsMessage(message));
                    }
                };
                
                webSocket.onclose = () => {
                    store.dispatch(connectionToGameServerTerminated());
                    webSocket = null;
                };

                return next(action);
            case actionTypes.WS_DISCONNECT_FROM_GAMESERVER:
                if (webSocket != null) {
                    webSocket.close();
                } else {
                    console.error("Attempting to close non-existent connection.");
                }
                webSocket = null;
                return next(action);
            case actionTypes.WS_SEND_MESSAGE:
                if (webSocket != null) {
                    webSocket.send(action.message);
                }
                // No need to let other reducers see this action
                break;
            default:
                return next(action);
        }
    };
};

export default wsMiddleware();