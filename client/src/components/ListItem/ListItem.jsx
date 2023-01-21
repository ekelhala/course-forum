/**
 * Created by Emil Kelhälä
 * This item is used to display names of available courses and discussions
 * also id is included to make browsing possible
 */

import React from "react";
import { Link } from "react-router-dom";

import './style.css';

class ListItem extends React.Component {

    render() {
        return(
            <div className="link-container">
                <Link className="link-text" to={this.props.link}>{this.props.text}</Link>
            </div>
        );
    }

}

export default ListItem;