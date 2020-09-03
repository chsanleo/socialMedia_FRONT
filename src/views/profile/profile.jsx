import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import CountryList from '../../components/countryList/countryList.jsx';
import TypesList from '../../components/typesList/typesList.jsx';
import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '', name: '', surname: '', birthdate: new Date(),
            pic_path: '', address: '', email: '', city: '',
            country: '', hobbies: '', job: '',
            msgError: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        if (this.props.user.id === undefined) { this.props.history.push('/'); }

        this.setState({
            id: this.props.user.id,
            username: this.props.user.username,
            name: this.props.user.name,
            surname: this.props.user.surname,
            birthdate: this.props.user.birthdate !== '' ? Date.parse(this.props.user.birthdate) : new Date(),
            pic_path: this.props.user.pic_path,
            address: this.props.user.address,
            email: this.props.user.email,
            city: this.props.user.city,
            country: this.props.user.country,
            hobbies: this.props.user.hobbies,
            job: this.props.user.job
        });
    }
    setCountry = (country) => {
        this.setState({ country: country });
    }
    setHobby = (hobby) => {
        this.setState({ hobbies: hobby });
    }
    setDate(date) {
        this.setState({ birthdate: date });
    }
    isIMG() {
        if (utils.isNullOrEmpty(this.state.pic_path)) {
            return (<img src='defaultProfile.png' width="200px" alt="eventPhoto" />);
        }
        let url = this.state.pic_path.split('.');
        switch (url[url.length - 1]) {
            case 'jpg':
            case 'JPG':
            case 'jpeg':
            case 'JPEG':
            case 'png':
            case 'PNG': return (<img src={this.state.pic_path} width="200px" alt="eventPhoto" />);

            default: return (<img src='defaultProfile.png' width="200px" alt="eventPhoto" />);
        }
    }
    pressUpdate = (ev) => {
        ev.preventDefault();
        let user = {
            id: this.state.id,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            pic_path: this.state.pic_path,
            address: this.state.address,
            birthdate: this.state.birthdate,
            email: this.state.email,
            city: this.state.city,
            country: this.state.country != null ? this.state.country : this.props.user.country,
            hobbies: this.state.hobbies,
            job: this.state.job
        };

        let error = validations.validateUser(user);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }
        try {
            userService.update(user);
            setTimeout(() => {
                this.props.history.push('/init');
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressUpdate}>
                    <h2>Personal information</h2>
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
                            <p><label>Username</label> &nbsp;
                    <input type="text" name="username" value={this.state.username || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>Name</label>&nbsp;
                    <input className="inputs" type="text" name="name" value={this.state.name || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>Surname</label>&nbsp;
                    <input type="text" name="surname" value={this.state.surname || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <label>Birthdate</label>&nbsp;
                         <DatePicker
                                selected={this.state.birthdate}
                                onChange={date => this.setDate(date)}
                                maxDate={new Date()}
                                name="date"
                                dateFormat="dd/MM/yyyy"
                            /><p></p>
                            <p><label>Address</label>&nbsp;
                    <input type="text" name="address" value={this.state.address || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>City</label>&nbsp;
                    <input type="text" name="city" value={this.state.city || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>Job</label>&nbsp;
                    <input type="text" name="job" value={this.state.job || ''}
                                    onChange={this.handleChange}></input><br /></p>
                            <p><label>Hobbies: </label> {this.props.user.hobbies};<br />
                                <TypesList setHobby={this.setHobby} readOnly /></p>
                            <p><label>Country: </label> {this.props.user.country}<br />
                                <CountryList setCountry={this.setCountry} readOnly /></p>
                            <br />
                        </div>
                    </div>
                    <div className="buttonUpload">
                    <button type="submit">Update profile!</button>
                    </div><br />
                    <NavLink to="/forgotPass">Change my password</NavLink>
                    <NavLink to="/init">Return to home</NavLink>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Profile);