import React from "react";

import './style.css';

class NameInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textBoxValue: ""};
    }

    render() {
        return(
            <div>
                <input className={"input-box"} type={"text"} value={this.state.textBoxValue}
                 onChange={(event) => this.setState({textBoxValue: event.target.value})}/>
                <button className={"ready-button"} onClick={() => {
                    if(!(this.state.textBoxValue === "")) {
                    this.props.onSend(this.state.textBoxValue)
                    this.setState({textBoxValue: ""})
                    }
                }}>OK</button>
            </div>
        );
    }

}

export default NameInput;