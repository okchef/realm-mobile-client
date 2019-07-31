import * as actionTypes from "../actions/actionTypes";
import {
    connectionToGameServerEstablished,
    connectionToGameServerTerminated
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
                webSocket = new WebSocket("ws://localhost:8080/player");

                webSocket.onopen = () => {
                    store.dispatch(connectionToGameServerEstablished());
                };
        
                webSocket.onmessage = (data) => {
                    console.error(data);
                };
                
                webSocket.onclose = () => {
                    store.dispatch(connectionToGameServerTerminated());
                };

                break;
            case actionTypes.WS_DISCONNECT_FROM_GAMESERVER:
                if (webSocket != null) {
                    webSocket.close();
                } else {
                    console.error("Attempting to close non-existent connection.");
                }
                webSocket = null;
                break;
            default:
                return next(action);
        }
    };
};

export default wsMiddleware();