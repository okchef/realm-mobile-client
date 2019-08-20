import {connect} from "react-redux";
import ConnectionBar from "../components/ConnectionBar";
import {
    connectToGameServer,
    disconnectFromGameServer,
    getRealmState
} from "../actions";

const mapStateToProps = (state) => {
    return {
        connected: state.gameServerConnectionReducer.connectedToGameServer,
        connecting: state.gameServerConnectionReducer.connecting,
        fetchingGameState: state.gameStateReducer.fetchingGameState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchConnectToGameServer: () => {
            dispatch(connectToGameServer());
        },
        dispatchDisconnectFromGameServer: () => {
            dispatch(disconnectFromGameServer());
        },
        dispatchGetRealmState: () => {
            dispatch(getRealmState());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionBar);