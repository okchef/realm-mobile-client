import React, {Component} from "react";
import SockJS from "sockjs-client";
import "./App.css";

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            isConnected: false
        };
    }

    handleClickConnect = () => {
        const webSocket = new WebSocket("ws://localhost:8080/player");
       
        webSocket.onmessage = (data) => {
            console.error(data);
        };
        
        webSocket.onclose = () => {
            this.updateConnectedState(false);
            this.webSocket = null;
        };

        this.webSocket = webSocket;

        this.updateConnectedState(true);
    }

    handleClickSendMessage = () => {
        this.webSocket.send(JSON.stringify({}));
    }

    handleClickDisconnect = () => {
        this.webSocket.close();
        this.webSocket = null;

        this.updateConnectedState(false);
    }

    updateConnectedState = (isConnected) => {
        this.setState({isConnected});
    }

    render() {
        return (
            <div>
                <div>My Happy Page</div>
                {
                    !this.state.isConnected ?
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