import React, {Component} from "react";
import styled from "styled-components";

import Hex from "./Hex";

const StyledHex = styled(Hex)`
    width: 33%;
    width: ${props => props.width};
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
`;

const LocalMapContainer = styled.div`
    width: 100%;
    max-width: calc(100vh - 48px);
    height: 100%;
    max-height: 100vw;
    position: relative;
    margin: 0 auto;
`;

export default class LocalMap extends Component {
    handleClickHex = (hexIndex) => {
        this.props.dispatchMovePlayer(hexIndex);
    };

    render() {
        return !this.props.gameServerConnection.connectedToGameServer ? null : (
            <LocalMapContainer ref={this.canvasContainerRef} className="local-map">
                <StyledHex hexIndex="0" onClick={this.handleClickHex} left="33%" top="33%"/>
                <StyledHex hexIndex="1" onClick={this.handleClickHex} left="33%" top="0"/>
                <StyledHex hexIndex="2" onClick={this.handleClickHex} left="8%" top="17%"/>
                <StyledHex hexIndex="3" onClick={this.handleClickHex} left="8%" top="50%"/>
                <StyledHex hexIndex="4" onClick={this.handleClickHex} left="33%" top="66%"/>
                <StyledHex hexIndex="5" onClick={this.handleClickHex} left="58%" top="50%"/>
                <StyledHex hexIndex="6" onClick={this.handleClickHex} left="58%" top="17%"/>
            </LocalMapContainer>
        );
    }
}