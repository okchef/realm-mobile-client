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

    :active:hover {
        fill: darken(0.2, ${props => props.fillColor});
    }
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
        const lineColor = this.props.hex.terrain === "GRASS" ? "darkgreen" : "darkblue";
        const fillColor = this.props.hex.terrain === "GRASS" ? "#68a63e" : "#7879c8";

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
                </svg>
            </div>
        );
    }
}