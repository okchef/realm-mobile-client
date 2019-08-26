import React, {Component} from "react";
import styled from "styled-components";
import {darken} from "polished";

const Polygon = styled.polygon`
    fill: ${props => {
        if (props.disabled) {
            //return darken(0.25, props.fillColor);
            return props.fillColor;
        } else {
            return props.touching ? darken(0.1, props.fillColor) : props.fillColor;
        }
    }};
    stroke: ${props => /*props.disabled ? darken(0.15, props.lineColor) :*/ props.lineColor};
    stroke-width: 4px;
    /*vector-effect: non-scaling-stroke;*/

    :active:hover {
        fill: darken(0.2, ${props => props.fillColor});
    }
`;

const Tray = styled.rect`
    fill: black;
    opacity: .3;
`;


const Friend = styled.circle`
`;

export default class Hex extends Component {
    constructor() {
        super();

        this.state = {
            touching: false
        };
    }
    
    handleClick = () => {
        if (!this.props.disabled) {
            this.props.onClick(this.props.direction);
        }
    }

    handleTouchStart = () => {
        if (!this.props.disabled) {
            this.setState({touching: true});
        }
    }

    handleTouchEnd = () => {
        if (!this.props.disabled) {
            this.setState({touching: false});
        }
    }

    render() {
        let lineColor, fillColor;

        if (this.props.hex.terrain === "GRASS") {
            lineColor = "darkgreen";
            fillColor = "#68a63e";
        } else if(this.props.hex.terrain === "WATER") {
            lineColor = "darkblue";
            fillColor = "#7879c8";
        }

        if (!this.props.hex.visible) {
            lineColor = darken(0.1, lineColor);
            fillColor = darken(0.3, fillColor);
        }

        let trayXOffset = 30;
        let trayYOffset = 63;

        return (
            <div className={this.props.className}>
                <svg pointerEvents="none" width="100%" height="100%" viewBox="0 0 100 100">
                    <Polygon
                        pointerEvents="painted"
                        disabled={this.props.disabled}
                        lineColor={lineColor}
                        fillColor={fillColor}
                        onClick={this.handleClick}
                        onTouchStart={this.handleTouchStart}
                        onTouchEnd={this.handleTouchEnd}
                        touching={this.state.touching}
                        points="25,0 75,0 100,50, 75,100 25,100 0,50"/>
                    <Tray height="35" width="56" x="22" y="55" />
                    {
                        this.props.friends ? this.props.friends.map(
                            (friend) => {
                                const friendElement = <Friend 
                                    key={`friend-${friend.playerId}`} 
                                    fill={friend.color}
                                    cx={trayXOffset} 
                                    cy={trayYOffset}
                                    r="5" />;
                                trayXOffset += 12;
                                return friendElement;
                            }
                        ) : null
                    }
                </svg>
            </div>
        );
    }
}