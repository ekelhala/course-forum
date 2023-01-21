import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ListItem, TextInput } from "../../components";

axios.defaults.baseURL = 'https://course-forum.herokuapp.com';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()}/>;
}

class Threads extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('/api/courses/'+this.props.params.courseId)
        .then((response) => {
            this.setState({items: response.data})
        });
    }
    
    render() {
        const threadsList = this.state.items.map((thread) => {
            return <ListItem text={thread.name} link={'/'+this.props.params.courseId+'/'+thread.id}/>;
        })
        return(
            <div>
                <h1>Viestiketjut</h1>
                {threadsList}
                <p>Luo uusi ketju</p>
                <TextInput onSend={(value) => {
                    axios.post('/api/courses/'+this.props.params.courseId,
                    {threadName: value});
                }}/>
            </div>
        );
    }
}

export default withParams(Threads);