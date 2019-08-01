import React, {Component} from "react";
import styled from "styled-components";

import Hex from "./Hex";

const StyledHex = styled(Hex)`
    max-width: 33vh;
    width: ${props => props.width};
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
`;

const LocalMapContainer = styled.div`
    flex-grow: 1;
    position: relative;
`;

export default class LocalMap extends Component {
    constructor(props) {
        super(props);
    }

    handleClickHex = (hexIndex) => {
        console.error(hexIndex);
    };

    render() {
        return (
            <LocalMapContainer ref={this.canvasContainerRef} className="realm-canvas">
                <StyledHex hexIndex="0" onClick={this.handleClickHex} width="33vw" left="33vw" top="calc(50% - 16vw)"/>
                <StyledHex hexIndex="1" onClick={this.handleClickHex} width="33vw" left="33vw" top="calc(50% - 49vw)"/>
                <StyledHex hexIndex="2" onClick={this.handleClickHex} width="33vw" left="8vw" top="calc(50% - 33vw)"/>
                <StyledHex hexIndex="3" onClick={this.handleClickHex} width="33vw" left="8vw" top="calc(50%)"/>
                <StyledHex hexIndex="4" onClick={this.handleClickHex} width="33vw" left="33vw" top="calc(50% + 17vw)"/>
                <StyledHex hexIndex="5" onClick={this.handleClickHex} width="33vw" left="58vw" top="calc(50%)"/>
                <StyledHex hexIndex="6" onClick={this.handleClickHex} width="33vw" left="58vw" top="calc(50% - 33vw)"/>
            </LocalMapContainer>
        );
    }
}