import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextInput } from "../../components";

axios.defaults.baseURL = 'http://localhost:'+process.env.PORT||8000;
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

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
            this.setState({items: response.data.messages, topic: response.data.topic});
        });
    }

    render() {
        const renderMessages = this.state.items.map((message) => {
            return <p>{message.text}</p>;
        })
        return(
            <div>
                <h1>{this.state.topic}</h1>
                <br/>
                {renderMessages}
                <br/>
                <p>Osallistu keskusteluun:</p>
                <TextInput onSend={(value) => {
                    axios.post('/api/courses/'+this.props.params.courseId+'/'+this.props.params.threadId,
                    {message: value})
                    .then((response) => {
                        this.loadDiscussion();
                        this.forceUpdate();});
                }}/>
            </div>
        );
    }
}

export default withParams(Discussion);