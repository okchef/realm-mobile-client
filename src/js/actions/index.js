import axios from "axios";
import * as actionTypes from "./actionTypes";
import EventFactory from "../events/EventFactory";

const eventFactory = new EventFactory();

export function connectToGameServer() {
    return {
        type: actionTypes.WS_CONNECT_TO_GAMESERVER
    };
}

export function connectionToGameServerEstablished(playerId, playerSessionId) {
    return function(dispatch) {
        dispatch(getRealmState());
        return dispatch({
            type: actionTypes.WS_CONNECTED_TO_GAMESERVER,
            playerId,
            playerSessionId
        });
    }
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

export function movePlayer(playerId, direction, dest) {
    return function(dispatch) {
        dispatch(sendWsMessage(eventFactory.getPlayerMoveEvent(direction)));
        return dispatch({
            type: actionTypes.MOVE_PLAYER,
            data: {
                playerId,
                direction,
                dest
            }
        });
    }
}

export function gotRealmState(realmState) {
    return {
        type: actionTypes.GOT_REALM_STATE,
        realmState
    };
}

export function getRealmState() {
    return function (dispatch) {
        dispatch({
            type: actionTypes.GET_REALM_STATE
        });
        return axios.get("http://localhost:8080/state").then((response) => {
            dispatch(gotRealmState(response.data));
        });
    }
}