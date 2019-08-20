import React, {Component} from "react";
import styled from "styled-components";

import Hex from "./Hex";
import PlayerIndicator from "./PlayerIndicator";
import {getHexInDirection, getCoordsInDirection} from "../realm/HexMapUtils";
import {getPlayerPosition} from "../realm/PlayerUtils";
import {getHex, getHexAfterPath} from "../realm/HexMapUtils";

const StyledHex = styled(Hex)`
    width: ${props => props.width};
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    pointer-events: none;
`;

const StyledPlayerIndicator = styled(PlayerIndicator)`
    position: absolute;
    width: 15%;
    left: 42.5%;
    top: 42.5%;
`;

const LocalMapContainer = styled.div`
    width: 100%;
    max-width: calc(100vh - 48px);
    height: 100%;
    max-height: 100vw;
    position: relative;
    margin: 0 auto;
`;

const MapAnimationContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: left 0s, top 0s;
    top: 0;
    left: 0;
    
    &.animating {
        left: ${props => props.xOffset};
        top: ${props => props.yOffset};
        transition: left .5s, top .5s;
    }
`;

export default class LocalMap extends Component {
    constructor() {
        super();

        this.state = {
            isAnimating: false,
            xOffset: null,
            yOffset: null
        };
    }
    
    handleClickHex = (direction) => {
        if (!this.state.isAnimating) {
            const playerPosition = getPlayerPosition(this.props.realmState,this.props.playerId);
            if (direction === "0") {

            } else {
                this.setState({
                    isAnimating: true,
                    ...this.getAnimationOffset(direction)
                });
                setTimeout(() => {
                    this.setState({
                        isAnimating: false,
                        xOffset: null,
                        yOffset: null
                    });
                    this.props.dispatchMovePlayer(this.props.playerId, direction, getCoordsInDirection(playerPosition, direction));
                }, 500);
            }
        }
    };

    getAnimationOffset(direction) {
        switch(direction) {
            case "1":
                return {
                    yOffset: "33%"
                };
            case "2":
                return {
                    xOffset: "25.5%",
                    yOffset: "15.5%"
                };
            case "3":
                return {
                    xOffset: "25.5%",
                    yOffset: "-15.5%"
                };
            case "4":
                return {
                    yOffset: "-33%"
                };
            case "5":
                return {
                    xOffset: "-25.5%",
                    yOffset: "-15.5%"
                };
            case "6":
                return {
                    xOffset: "-25.5%",
                    yOffset: "15.5%"
                };
        }
    }

    getDirectionHex = (playerPosition, direction, left, top) => {
        const hex = getHexInDirection(this.props.realmState.map, playerPosition, direction);
        if (hex) {
            return <StyledHex key={direction} direction={direction} hex={hex} onClick={this.handleClickHex} width="33%" left={left} top={top}/>
        } else {
            return null;
        }
    };

    getNeighboringHexes = (playerPosition) => {
        return [
            this.getDirectionHex(playerPosition, "1", "33%", "0"),
            this.getDirectionHex(playerPosition, "2", "8%", "17%"),
            this.getDirectionHex(playerPosition, "3", "8%", "50%"),
            this.getDirectionHex(playerPosition, "4", "33%", "66%"),
            this.getDirectionHex(playerPosition, "5", "58%", "50%"),
            this.getDirectionHex(playerPosition, "6", "58%", "17%")
        ]
    }

    getDistantHex = (playerPosition, path, left, top) => {
        const hex = getHexAfterPath(this.props.realmState.map, playerPosition, path);
        if (hex) {
            return <StyledHex key={path} disabled={true} hex={hex} width="33%" left={left} top={top}/>
        } else {
            return null;
        }
    };
    
    getDistantHexes = (playerPosition) => {
        return [
            this.getDistantHex(playerPosition, ["1", "1"], "33%", "-33%"),
            this.getDistantHex(playerPosition, ["1", "2"], "8%", "-16%"),
            this.getDistantHex(playerPosition, ["2", "2"], "-17%", "0%"),
            this.getDistantHex(playerPosition, ["2", "3"], "-17%", "33%"),
            this.getDistantHex(playerPosition, ["3", "3"], "-17%", "66%"),
            this.getDistantHex(playerPosition, ["3", "4"], "8%", "82%"),
            this.getDistantHex(playerPosition, ["4", "4"], "33%", "99%"),
            this.getDistantHex(playerPosition, ["4", "5"], "58%", "82%"),
            this.getDistantHex(playerPosition, ["5", "5"], "83%", "65%"),
            this.getDistantHex(playerPosition, ["5", "6"], "83%", "33%"),
            this.getDistantHex(playerPosition, ["6", "6"], "83%", "0%"),
            this.getDistantHex(playerPosition, ["6", "1"], "58%", "-16%")
        ];
    };

    render() {
        const {playerId, realmState} = this.props;

        if (this.props.connected && !this.props.fetchingGameState && this.props.realmState.map) {

            const playerPosition = getPlayerPosition(realmState, playerId);

            return playerPosition ? (
                <LocalMapContainer className={"local-map"}>
                    <MapAnimationContainer xOffset={this.state.xOffset} yOffset={this.state.yOffset} className={this.state.isAnimating ? "animating" : ""}>
                        {this.getDistantHexes(playerPosition)}
                        {this.getNeighboringHexes(playerPosition)}
                        <StyledHex main={true} direction="0" hex={getHex(this.props.realmState.map, playerPosition)} onClick={this.handleClickHex} width="33%" left="33%" top="33%"/>
                    </MapAnimationContainer>
                    <StyledPlayerIndicator />
                </LocalMapContainer>
            ) : null;
        }

        return null;        
    }
}