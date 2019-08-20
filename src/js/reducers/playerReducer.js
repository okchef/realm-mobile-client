import * as actionTypes from "../actions/actionTypes";

const initialState = {
    
};

export default function player(state = initialState, action) {
    switch (action.type) {
        case actionTypes.MOVE_PLAYER:
            return state;
        default:
            return state;
    }
}

