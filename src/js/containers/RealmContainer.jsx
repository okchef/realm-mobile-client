import {connect} from "react-redux";
import Realm from "../components/Realm";
import {
    connectToGameServer,
    connectionToGameServerEstablished,
    disconnectFromGameServer,
    connectionToGameServerTerminated
} from "../actions";

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchConnectToGameServer: () => {
            dispatch(connectToGameServer());
        },
        dispatchDisconnectFromGameServer: () => {
            dispatch(disconnectFromGameServer());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Realm);