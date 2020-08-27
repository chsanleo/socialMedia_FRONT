import React from 'react';

import { eventService } from '../../services/eventService.js';
import { dataService } from '../../services/dataService.js';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msgError: ''
        }
    }

    componentDidMount() {
        eventService.getAllEvents();
        dataService.getAllCountries();
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressLogin = (ev) => {

    }
    render() {
        return (
            <div>
                landing
            </div>
        )
    }
}
export default Landing;