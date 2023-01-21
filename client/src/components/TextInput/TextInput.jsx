import React from "react";

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textBoxValue: ""};
    }

    render() {
        return(
            <div>
                <input type={"text"} value={this.state.textBoxValue}
                 onChange={(event) => this.setState({textBoxValue: event.target.value})}/>
                <button onClick={() => {
                    this.props.onSend(this.state.textBoxValue)
                    this.setState({textBoxValue: ""})}}>Ok</button>
            </div>
        );
    }

}

export default TextInput;