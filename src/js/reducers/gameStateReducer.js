import * as actionTypes from "../actions/actionTypes";

const initialState = {
    realmState: {},
    fetchingGameState: false
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GOT_REALM_STATE:
            return Object.assign({}, state, {
                realmState: action.realmState,
                fetchingGameState: false
            });
        case actionTypes.GET_REALM_STATE:
            return Object.assign({}, state, {
                fetchingGameState: true
            });
        case actionTypes.MOVE_PLAYER:
            const {playerId, dest} = action.data;
            return {
                ...state,
                realmState: {
                    ...state.realmState,
                    players: {
                        ...state.realmState.players,
                        [playerId]: {
                            ...state.realmState.players[playerId],
                            position: dest
                        }
                    }
                }
            };
        default:
            return state;
    }
}