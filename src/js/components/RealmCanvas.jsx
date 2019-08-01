import React, {Component} from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
    flex-grow: 1;
`;

const drawShape = (ctx, points) => {
    ctx.beginPath();
    
    ctx.moveTo(points[0].x, points[0].y);
    
    points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
    });

    ctx.fillStyle = "#719a47";
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#607b43";
    ctx.lineWidth = 4;
    ctx.stroke();
};

const getHexPoints = (xCenter, yCenter, width, height) => {
    return [
        {x: xCenter + (width / 2), y: yCenter},
        {x: xCenter + (width / 4), y: yCenter + (height / 2)},
        {x: xCenter - (width / 4), y: yCenter + (height / 2)},
        {x: xCenter - (width / 2), y: yCenter},
        {x: xCenter - (width / 4), y: yCenter - (height / 2)},
        {x: xCenter + (width / 4), y: yCenter - (height / 2)},
    ]
};

export default class RealmCanvas extends Component {
    constructor(props) {
        super(props);

        this.canvasContainerRef = React.createRef();
        this.canvasRef = React.createRef();
    }
    
    componentDidMount() {
        const canvasContainerStyle = getComputedStyle(this.canvasContainerRef.current);

        const h = parseInt(canvasContainerStyle.height);
        const w = parseInt(canvasContainerStyle.width);

        this.yOffset = window.innerHeight - h;

        this.canvasRef.current.setAttribute("height", canvasContainerStyle.height);
        this.canvasRef.current.setAttribute("width", canvasContainerStyle.width);

        const ctx = this.canvasRef.current.getContext("2d");

        const hexHeight = Math.min(w/3, h/4);
        const hexWidth = Math.min(w/3, h/4);
        const hexWidthOffset = 3*hexWidth/4;
        const hexHeightOffset = hexHeight/2;

        this.hex0 = getHexPoints(w/2, h/2, hexWidth, hexHeight);
        this.hex1 = getHexPoints(w/2, h/2 - hexHeight, hexWidth, hexHeight);
        this.hex2 = getHexPoints(w/2 - hexWidthOffset, h/2 - hexHeightOffset, hexWidth, hexHeight);
        this.hex3 = getHexPoints(w/2 - hexWidthOffset, h/2 + hexHeightOffset, hexWidth, hexHeight);
        this.hex4 = getHexPoints(w/2, h/2 + hexHeight, hexWidth, hexHeight);
        this.hex5 = getHexPoints(w/2 + hexWidthOffset, h/2 - hexHeightOffset, hexWidth, hexHeight);
        this.hex6 = getHexPoints(w/2 + hexWidthOffset, h/2 + hexHeightOffset, hexWidth, hexHeight);

        drawShape(ctx, this.hex0);
        drawShape(ctx, this.hex1);
        drawShape(ctx, this.hex2);
        drawShape(ctx, this.hex3);
        drawShape(ctx, this.hex4);
        drawShape(ctx, this.hex5);
        drawShape(ctx, this.hex6);
    }

    handleCanvasClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        
        console.log(event.clientY);
    }

    render() {
        return (
            <CanvasContainer ref={this.canvasContainerRef} className="realm-canvas">
                <canvas onClick={this.handleCanvasClick} ref={this.canvasRef} />
            </CanvasContainer>
        );
    }
}