import React from 'react';

import { contactService } from '../../services/contactService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: "",
            subject: "",
            email: "",
            message: "",
            msgError: "",
        }
        this.createContactMsg = this.createContactMsg.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        this.setState({ userID: 0});
    }

    createContactMsg() {
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
        try {
            contactService.createContactMail(contactMsg);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    render() {
        return (
            <div className="centerInfo">
                <div className="contactUs">
                    <span className="error">{this.state.msgError}</span><br />
                    <input placeholder="Your email" type="text" name="email" value={this.state.email} onChange={this.handleChange}></input><br/>
                    <input  placeholder="Subject" type="text" name="subject" value={this.state.subject} onChange={this.handleChange}></input><br/>
                    <input placeholder="What do you want say to us" type="text" name="message" value={this.state.message} onChange={this.handleChange}></input><br/>
                    <button onClick={this.createContactMsg}>ENVIAR!</button>
                </div>
            </div>
        );
    }
};
export default ContactUs;