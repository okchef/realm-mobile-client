import React, {Component} from "react";
import styled from "styled-components";

const Bar = styled.div`
    background-color: #c5e0e7;
    padding: 5px;
    z-index: 1;
`;

export default class ConnectionBar extends Component {
    
    handleClickConnect = () => {
        this.props.dispatchConnectToGameServer();
    }

    handleClickDisconnect = () => {
        this.props.dispatchDisconnectFromGameServer();
    }
    
    render() {
        const isConnected = this.props.connected && !this.props.fetchingGameState;
        const isConnecting = this.props.connecting || this.props.fetchingGameState;
        return (
            <Bar>
                {
                    !isConnected ?
                        <button className="btn btn-primary" disabled={isConnecting} onClick={this.handleClickConnect}>Connect</button> :
                        <button className="btn btn-primary" onClick={this.handleClickDisconnect}>Disconnect</button>
                }
            </Bar>
        );
    }
}