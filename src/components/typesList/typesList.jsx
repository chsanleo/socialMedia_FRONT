import React from 'react';

import PROPERTIES from '../../config/properties.js';

class TypesList extends React.Component {

    state = {}

    render() {
        return (
            <select defaultValue={this.props.selected} onChange={
                e => this.props.setHobby( e.target.value )}>
                {PROPERTIES.Types?.map((type,index) => (
                    <option key={index}
                        value={type}
                    >
                        {type}
                    </option>
                ))}
            </select>

        )
    }
}

export default TypesList;
