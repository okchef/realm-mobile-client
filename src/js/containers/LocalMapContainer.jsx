import {connect} from "react-redux";
import LocalMap from "../components/LocalMap";
import {
    movePlayer
} from "../actions";

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchMovePlayer: (direction) => {
            dispatch(movePlayer(direction));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalMap);