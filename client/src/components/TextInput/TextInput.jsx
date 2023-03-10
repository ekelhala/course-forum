import React from "react";

import {IoMdSend} from "react-icons/io";

import './style.css';

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textBoxValue: ""};
    }

    render() {
        return(
            <div className="input-container">
                <textarea className={"input-box-big"} value={this.state.textBoxValue}
                 onChange={(event) => this.setState({textBoxValue: event.target.value})}/>
                <button className={"ready-button"} onClick={() => {
                    if(!(this.state.textBoxValue === "")) {
                    this.props.onSend(this.state.textBoxValue)
                    this.setState({textBoxValue: ""})
                    }
                }}><IoMdSend size={"1.3em"}/></button>
            </div>
        );
    }

}

export default TextInput;