import React, {Component} from "react";

import ConnectionBarContainer from "../containers/ConnectionBarContainer";
import RealmCanvas from "./RealmCanvas";

export default class Realm extends Component {
    render() {
        return (
            <div className="realm">
                <ConnectionBarContainer />
                <RealmCanvas />
            </div>
        );
    }
}