import React from "react";
import axios from "axios";

import { List, ListItem } from "../../components";

import './style.css';

class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('/api/courses')
        .then((response) => {
            this.setState({items: response.data})
        });
    }

    render() {
        const coursesList = this.state.items.map((course) => {
            return <ListItem text={course.name} link={'/'+course.id}/>;
        })
        return(
            <div>
                <h1 className="main-heading">Kurssit</h1>
                <p className="main-heading-small">Kysy, vastaa ja keskustele anonyymisti</p>
                <List>
                    {coursesList}
                </List>
            </div>
        );
    }

}

export default Courses;