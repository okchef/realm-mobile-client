import React, {Component} from "react";
import styled from "styled-components";

import ConnectionBarContainer from "../containers/ConnectionBarContainer";
import PlayArea from "./PlayArea";

const RealmBox = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export default class Realm extends Component {
    render() {
        return (
            <RealmBox className="realm">
                <ConnectionBarContainer />
                <PlayArea />
            </RealmBox>
        );
    }
}