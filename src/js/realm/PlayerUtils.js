export function getPlayerPosition(realmState, playerId) {
    if (realmState && realmState.players && realmState.players[playerId]) {
        return realmState.players[playerId].position;
    } else {
        return null;
    }
}