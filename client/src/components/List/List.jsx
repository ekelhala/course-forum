/*Created by Emil Kelhälä
A list which holds ListItem-components */

import React from "react";
import ListItem from "../ListItem/ListItem";
import style from './style.css';

class List extends React.Component {

    render() {
        return(
            <div className="list-container">
                {this.props.children}
            </div>
        );
    }

}

export default List;