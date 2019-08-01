import React, {Component} from "react";
import styled from "styled-components";

const Bar = styled.div`
    background-color: "grey";
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
        return (
            <div className="connection-bar">
                {
                    !isConnected ?
                        <button onClick={this.handleClickConnect}>Connect</button> :
                        <button onClick={this.handleClickDisconnect}>Disconnect</button>
                }
            </div>
        );
    }
}