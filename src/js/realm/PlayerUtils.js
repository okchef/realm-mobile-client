import {positionsAreEqual} from "./HexMapUtils";

export function getPlayerPosition(realmState, playerId) {
    if (realmState && realmState.players && realmState.players[playerId]) {
        return realmState.players[playerId].position;
    } else {
        return null;
    }
}

export function getFriendPositions(realmState, playerId) {
    if (realmState && realmState.players) {
        return Object.values(realmState.players).filter(player => player.playerId !== playerId && player.connected).map(player => player.position);
    } else {
        return [];
    }
}

export function getFriendsAtPosition(realmState, playerId, position) {
    if (realmState && realmState.players) {
        return Object.values(realmState.players).filter(player => player.playerId !== playerId && positionsAreEqual(player.position, position) && player.connected);
    } else {
        return [];
    }
}

export function getPlayerColor(realmState, playerId) {
    if (realmState && realmState.players && realmState.players[playerId]) {
        return realmState.players[playerId].color;
    } else {
        return null;
    }
}