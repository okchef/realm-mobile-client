import * as actionTypes from "./actionTypes";
import EventFactory from "../events/EventFactory";

const eventFactory = new EventFactory();

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

export function sendWsMessage(event) {
    return {
        type: actionTypes.WS_SEND_MESSAGE,
        message: JSON.stringify(event)
    };
}

export function movePlayer(direction) {
    return function(dispatch) {
        dispatch(sendWsMessage(eventFactory.getPlayerMoveEvent(direction)));
        return {
            type: actionTypes.MOVE_PLAYER,
            data: direction
        };
    }
}