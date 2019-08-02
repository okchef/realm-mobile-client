export const PLAYER_MOVE = "playerMove";

export default class EventFactory {
    getPlayerMoveEvent(direction) {
        return {
            realmEventType: PLAYER_MOVE,
            realmEvent: {
                direction
            }
        }
    }
};