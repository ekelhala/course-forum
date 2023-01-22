import React from "react";

import {BiTime} from "react-icons/bi";

import './style.css';

class MessageItem extends React.Component {

    render() {
        return(
            <div className="message-container">
                <div className="message-timestamp-container"><BiTime/><p className="message-timestamp">{this.props.timestamp}</p></div>
                <p className="message-text">{this.props.text}</p>
            </div>
        );
    }

}

export default MessageItem;