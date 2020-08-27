import React from 'react';
import { connect } from 'react-redux';

import NavLeft from '../../components/navLeft/navLeft.jsx';
import { eventService } from '../../services/eventService.js';
import { dataService } from '../../services/dataService.js';

import './landing.scss';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msgError: ''
        }
    }

    componentDidMount() {
        if (this.props.userL.id === undefined) { this.props.history.push('/'); }
        eventService.getAllEvents();
        dataService.getAllCountries();
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    render() {
        return (
            <div className="landing">
                <div className="leftMenu"><NavLeft /></div>

                <div className="event">
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                    <p>landing</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(Landing);
