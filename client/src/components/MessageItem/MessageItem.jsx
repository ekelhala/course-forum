import React from "react";

import './style.css';

class MessageItem extends React.Component {

    render() {
        return(
            <div className="message-container">
                <p className="message-text">{this.props.text}</p>
            </div>
        );
    }

}

export default MessageItem;