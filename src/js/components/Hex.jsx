import React, {Component} from "react";
import styled from "styled-components";
import {darken} from "polished";

const Polygon = styled.polygon`
    fill: ${props => props.touching ? darken(0.2, "#68a63e") : props.fillColor || "#68a63e"};
    stroke: ${props => props.lineColor || "darkgreen"};
    stroke-width: 4px;

    :active:hover {
        fill: darken(0.2, "#68a63e");
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
        this.props.onClick(this.props.hexIndex);
    }

    handleTouchStart = () => {
        this.setState({touching: true});
    }

    handleTouchEnd = () => {
        this.setState({touching: false});
    }

    render() {
        return (
            <div className={this.props.className}>
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <Polygon
                        lineColor={this.props.lineColor}
                        fillColor={this.props.fillColor}
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