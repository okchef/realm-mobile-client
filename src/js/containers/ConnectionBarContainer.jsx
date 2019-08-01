import {connect} from "react-redux";
import ConnectionBar from "../components/ConnectionBar";
import {
    connectToGameServer,
    disconnectFromGameServer
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionBar);