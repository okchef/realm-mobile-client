import * as actionTypes from "./actionTypes";

export function connectToGameServer() {
    return {
        type: actionTypes.WS_CONNECT_TO_GAMESERVER
    };
}

export function connectionToGameServerEstablished() {
    return {
        type: actionTypes.WS_CONNECTED_TO_GAMESERVER
    };
}

export function disconnectFromGameServer() {
    return {
        type: actionTypes.WS_DISCONNECT_FROM_GAMESERVER
    };
}

export function connectionToGameServerTerminated() {
    return {
        type: actionTypes.WS_DISCONNECTED_FROM_GAMESERVER
    };
}