import React from 'react';
import { connect } from 'react-redux';

import { contactService } from '../../services/contactService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';
import { NavLink } from 'react-router-dom';

class ContactUs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userID: 0,
            subject: '',
            email: '',
            message: '',
            msgError: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        this.setState({
            userID: this.props.userL.id !== null ? this.props.userL.id : 0,
            email: this.props.userL.email !== null ? this.props.userL.email : ''
        });
    }
    returnApp() {
        if (this.props.userL.id != null) {
            return (<NavLink to="/init" > Return to Init</NavLink>);
        }
    }
    pressSend = (ev) => {
        ev.preventDefault();
        const contactMsg = {
            userID: this.state.userID,
            message: this.state.message,
            subject: this.state.subject,
            email: this.state.email
        }

        let error = validations.validateContactUs(contactMsg);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        contactService.createContactMail(contactMsg);

        setTimeout(() => {
            if (this.props.userL.email !== null) {
                this.props.history.push('/init');
            }
            this.props.history.push('/');
        }, 2000);

    }

    render() {
        return (
            <div className="centerInfo">
                <div className="contactUs">
                    <h3>What do u want say to us?</h3>
                    <span className="errorText">{this.state.msgError}</span><br />
                    <form onSubmit={this.pressSend}>
                        <label>Contact email: </label><br />
                        <input placeholder="Your email" type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br /><br />
                        <label>Subject: </label><br />
                        <input placeholder="Subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange} /><br /><br />
                        <label>Your message: </label><br />
                        <input placeholder="What do you want say to us" className="longInput" type="text" name="message" value={this.state.message} onChange={this.handleChange}></input><br /><br />
                        <button className="buttonAccess"  type="submit">ENVIAR!</button>
                        {this.returnApp()}
                    </form>
                </div>
            </div>
        );
    }
};
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(ContactUs);