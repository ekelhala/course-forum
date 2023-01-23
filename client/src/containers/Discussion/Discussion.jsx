import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MessageItem, TextInput } from "../../components";
import { AiFillCloseCircle } from "react-icons/ai";

import './style.css';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()}/>;
}

class Discussion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        this.loadDiscussion();
    }

    loadDiscussion() {
        axios.get('/api/courses/'+this.props.params.courseId+'/'+this.props.params.threadId)
        .then((response) => {
            this.setState({items: response.data.messages,
                            topic: response.data.topic,
                            showMsgBox: response.data.canParticipate});
        });
    }

    render() {
        var id = -1;
        var date;
        const renderMessages = this.state.items.map((message) => {
            id++;
            date = new Date(message.timePosted);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getHours();
            let mins = date.getMinutes();
            if(mins < 10) {
                mins = '0'+mins;
            }
            return <MessageItem text={message.text} timestamp={day+'.'+month+'.'+year+' '+hours+':'+mins} key={id} senderId={id}/>;
        })
        return(
            <div className="main-container">
                <h1 className="topic-text">{this.state.topic}</h1>
                <br/>
                {renderMessages}
                <br/>
                <div className="message-box-container">
                <div style={{display: this.state.showMsgBox ? "block":"none"}}>
                <TextInput onSend={(value) => {
                    axios.post('/api/courses/'+this.props.params.courseId+'/'+this.props.params.threadId,
                    {message: value})
                    .then((response) => {
                        this.loadDiscussion();
                        this.forceUpdate();})
                    .catch((error) => {console.log(error.response.data)});
                }}/>
                </div>
                <div style={{display: this.state.showMsgBox ? "none":"block"}}>
                    <div className="send-message-text-container">
                        <AiFillCloseCircle size={"1.5em"} color={"red"}/>
                        <p className="send-message-text">Viestien lähetysväli on 3 minuuttia.</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default withParams(Discussion);