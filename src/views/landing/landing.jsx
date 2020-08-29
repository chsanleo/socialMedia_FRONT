import React from 'react';
import { connect } from 'react-redux';

import NavLeft from '../../components/navLeft/navLeft.jsx';
import { eventService } from '../../services/eventService.js';
import { dataService } from '../../services/dataService.js';

import SearchByInterest from '../../components/searchEvent/searchEvents.jsx';
import EventItem from '../../components/eventItem/eventItem.jsx';

import './landing.scss';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLoad: true,
            msgError: ''
        }
    }

    componentDidMount() {
        if (this.state.firstLoad) {
            if (this.props.userL.id === undefined) { this.props.history.push('/'); }

            let eventType = {
                type: this.props.userL.hobbies
            }

            eventService.getAllEvents(eventType);
            dataService.getAllCountries();

            this.setState({ firstLoad: false });
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }
    render() {
        return (
            <div className="landing">
                <div className="leftMenu"><NavLeft /></div>
                <div className="options">
                    <SearchByInterest />
                    <NavLink to="/createevent">Create a Event</NavLink><br/>
                    <NavLink to="/contactMail">Contact Us</NavLink><br/>
                </div>
                <div className="event">
                    <EventItem />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(Landing);
