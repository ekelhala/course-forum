import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ListItem, NameInput } from "../../components";

import './style.css';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()}/>;
}

class Threads extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        this.loadThreads();
    }

    loadThreads() {
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
            <div className="threads-container">
                <h1 className="threads-heading">Viestiketjut</h1>
                {threadsList}
                <p className="threads-new-text">Luo uusi ketju</p>
                <NameInput onSend={(value) => {
                    axios.post('/api/courses/'+this.props.params.courseId,
                    {threadName: value})
                    .then((response) => {
                        this.loadThreads();
                        this.forceUpdate();
                    });
                }}/>
            </div>
        );
    }
}

export default withParams(Threads);