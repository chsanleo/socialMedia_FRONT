import React from 'react';

import { eventService } from '../../services/eventService.js';
import TypesList from '../typesList/typesList.jsx';

class SearchEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: ''
        }
    }
    setHobby = (type) => {
        let eventType = {type:type}
        eventService.getAllEvents(eventType);
    }
    render() {
        return (
            <div>
            <label>Search Events by Interests: </label> 
            <TypesList setHobby={this.setHobby} readOnly />
            </div>
        )
    };
}

export default SearchEvents;
