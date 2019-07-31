import React, {Component} from "react";

export default class Realm extends Component {
    handleClickConnect = () => {
        this.props.dispatchConnectToGameServer();
    }

    handleClickSendMessage = () => {
        //this.webSocketService.sendMessage({});
    }

    handleClickDisconnect = () => {
        this.props.dispatchDisconnectFromGameServer();
    }
    
    render() {
        const isConnected = this.props.gameServerConnection.connectedToGameServer;
        return (
            <div>
                <div>My Happy Page</div>
                {
                    !isConnected ?
                        <button onClick={this.handleClickConnect}>Connect</button> :
                        <div>
                            <button onClick={this.handleClickSendMessage}>Send Message</button>
                            <button onClick={this.handleClickDisconnect}>Disconnect</button>
                        </div>
                }
            </div>
        );
    }
}