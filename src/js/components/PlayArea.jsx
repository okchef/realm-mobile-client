import React, {Component} from "react";
import styled from "styled-components";

import LocalMapContainer from "../containers/LocalMapContainer";

const StyledPlayArea = styled.div`
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export default class PlayArea extends Component {
    render() {
        return (
            <StyledPlayArea className="play-area">
                <LocalMapContainer />
            </StyledPlayArea>
        );
    }
}