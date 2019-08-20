import {connect} from "react-redux";
import LocalMap from "../components/LocalMap";
import {
    movePlayer
} from "../actions";

const mapStateToProps = (state) => {
    return {
        connected: state.gameServerConnectionReducer.connectedToGameServer,
        fetchingGameState: state.gameStateReducer.fetchingGameState,
        realmState: state.gameStateReducer.realmState,
        playerId: state.gameServerConnectionReducer.playerId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchMovePlayer: (playerId, direction, dest) => {
            dispatch(movePlayer(playerId, direction, dest));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalMap);