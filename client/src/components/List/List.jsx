/*Created by Emil Kelhälä
A list which holds ListItem-components */

import React from "react";

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