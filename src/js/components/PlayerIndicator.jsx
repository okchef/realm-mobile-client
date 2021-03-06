import React, {Component} from "react";
import styled from "styled-components";
import {darken} from "polished";

const Circle = styled.circle`
    fill: ${props => props.color || "purple"};
    stroke: ${props => props.color || "purple"};
    stroke-width: 4px;
`;

export default class PlayerIndicator extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <svg pointerEvents="none" width="100%" height="100%" viewBox="0 0 100 100">
                    <Circle color={this.props.color} cx="50%" cy="50%" r="48%" />
                </svg>
            </div>
        );
    }
}