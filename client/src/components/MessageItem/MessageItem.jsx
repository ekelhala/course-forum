import React from "react";

import {AiFillClockCircle} from "react-icons/ai";

import './style.css';

class MessageItem extends React.Component {

    render() {
        return(
            <div className="message-container">
                <div className="message-info-container">
                    <div className="message-timestamp-container">
                        <AiFillClockCircle/><p className="message-timestamp">{this.props.timestamp}</p>
                    </div>
                </div>
                <p className="message-text">{this.props.text}</p>
            </div>
        );
    }

}

export default MessageItem;