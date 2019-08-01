import React, {Component} from "react";
import styled from "styled-components";

const Bar = styled.div`
    background-color: #c5e0e7;
    padding: 5px;
`;

export default class ConnectionBar extends Component {
    
    handleClickConnect = () => {
        this.props.dispatchConnectToGameServer();
    }

    handleClickDisconnect = () => {
        this.props.dispatchDisconnectFromGameServer();
    }
    
    render() {
        const isConnected = this.props.gameServerConnection.connectedToGameServer;
        const isConnecting = this.props.gameServerConnection.connecting;
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