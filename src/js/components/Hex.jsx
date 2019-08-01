import React, {Component} from "react";
import styled from "styled-components";

const Polygon = styled.polygon`
    fill: ${props => props.fillColor || "#68a63e"};
    stroke: ${props => props.lineColor || "darkgreen"};
    stroke-width: 4px;

    :active {
        fill: red;
    }
`;

export default class Hex extends Component {
    handleClick = () => {
        this.props.onClick(this.props.hexIndex);
    }

    render() {
        return (
            <div className={this.props.className}>
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <Polygon
                        lineColor={this.props.lineColor}
                        fillColor={this.props.fillColor}
                        onClick={this.handleClick}
                        points="25,0 75,0 100,50, 75,100 25,100 0,50"/>
                </svg>
            </div>
        );
    }
}