import React, {Component} from "react";
import styled from "styled-components";

import ConnectionBarContainer from "../containers/ConnectionBarContainer";
import LocalMapContainer from "../containers/LocalMapContainer";

const RealmBox = styled.div`
    background-color: black;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default class Realm extends Component {
    render() {
        return (
            <RealmBox className="realm">
                <ConnectionBarContainer />
                <LocalMapContainer />
            </RealmBox>
        );
    }
}