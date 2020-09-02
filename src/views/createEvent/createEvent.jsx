import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import NavLeft from '../../components/navLeft/navLeft.jsx';
import CountryList from '../../components/countryList/countryList.jsx';
import TypesList from '../../components/typesList/typesList.jsx';
import CreateMessage from '../../components/createMessage/createMessage.jsx';

import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';
import { eventService } from '../../services/eventService.js';


class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '', body: '', pic_path: '',
            type: '', date: new Date(), city: '', country: '',
            msgError: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.setText = this.setText.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        if (utils.isNullOrEmpty(this.props.user == null)) { this.props.history.push('/'); }
        if (utils.isNullOrEmpty(this.props.user.username)) { this.props.history.push('/profile'); }

        this.setState({
            country: this.props.user.country,
            city: this.props.user.city
        });
    }
    setCountry = (country) => {
        this.setState({ country: country });
    }
    setHobby = (hobby) => {
        this.setState({ type: hobby });
    }
    setDate(date) {
        this.setState({ date: date });
    }
    isIMG() {

        let url = this.state.pic_path.split('.');
        switch (url[url.length - 1]) {
            case 'jpg':
            case 'JPG':
            case 'jpeg':
            case 'JPEG':
            case 'png':
            case 'PNG': return (<img src={this.state.pic_path} width="200px" alt="eventPhoto" />);

            default: return (<img src='Activities.png' width="200px" alt="eventPhoto" />);
        }
    }
    //#region text
    setText(text) {
        text = utils.cleanHTML(text);

        if (!utils.isNullOrEmpty(text)) { this.setState({ body: text }); }
    }
    //#endregion
    pressCreate() {
        let event = {
            owner: this.props.user,
            title: this.state.title,
            body: this.state.body,
            pic_path: this.state.pic_path,
            type: this.state.type !== '' ? this.state.type : this.props.user.hobbies,
            date: this.state.date,
            city: this.state.city !== null ? this.state.city : this.props.user.city,
            country: this.state.country !== null ? this.state.country : this.props.user.country
        };

        let error = validations.validateEvent(event);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }
        try {
            eventService.createEvent(event);
            setTimeout(() => {
                this.props.history.push('/init');
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="createEvent">
                <div className="leftMenu"><NavLeft /></div>
                <div className="centerInfo" >
                    <h2>Event information</h2>
                    <div className="formsFormat">
                        <div className="image">
                            {this.isIMG()}
                            <p><label>Add remote Photo (url):</label><br />
                                <input type="text" name="pic_path" value={this.state.pic_path || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <br />
                        </div>
                        <div>
                            <span className="errorText">{this.state.msgError}</span>

                            <p><label>Title</label>&nbsp;
                    <input type="text" name="title" value={this.state.title || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <h3>Describe the event:</h3>
                            <CreateMessage setText={this.setText} readOnly />

                            <label>Date of event: </label>&nbsp;
                                <DatePicker
                                selected={this.state.date}
                                onChange={date => this.setDate(date)}
                                minDate={new Date()}
                                name="date"
                                dateFormat="dd/MM/yyyy"
                            />

                            <p><label>City</label>&nbsp;
                    <input type="text" name="city" value={this.state.city || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>Country: </label> {this.props.user.country}<br />
                                <CountryList setCountry={this.setCountry} readOnly /></p>
                            <p><label>Type: </label> {this.props.user.hobbies}<br />
                                <TypesList setHobby={this.setHobby} readOnly /></p>
                            <br />
                            <button onClick={e => { this.pressCreate() }}>Create Event!</button><br /></div>
                    </div>

                    <NavLink to="/init" ></NavLink>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(CreateEvent);