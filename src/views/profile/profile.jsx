import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import CountryList from '../../components/countryList/countryList.jsx';
import TypesList  from '../../components/typesList/typesList.jsx';
import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '', name: '', surname: '', birthdate: '',
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
        if (utils.isNullOrEmpty(this.props.user == null)) {
            this.props.history.push('/');
        }
        this.setState({
            id: this.props.user.id,
            username: this.props.user.username,
            name: this.props.user.name,
            surname: this.props.user.surname,
            birthdate: this.props.user.birthdate,
            pic_path: this.props.user.pic_path != null ? this.props.user.pic_path : './defaultProfile.png',
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
    pressUpdate = (ev) => {
        ev.preventDefault();
        let user = {
            id: this.state.id,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            pic_path: this.state.pic_path,
            address: this.state.address,
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
        console.log(user);
        try {
            userService.update(user);
            setTimeout(() => {
                this.props.history.push('/init');
            }, 2000);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="centerInfo">
                <form onSubmit={this.pressUpdate}>
                    <h2>Personal information</h2>
                    <img src={this.state.pic_path} alt="userPhoto" /><br />
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
                    <button type="submit">Update profile!</button><br />
                    <NavLink to="/forgotPass">Change my password</NavLink>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(Profile);