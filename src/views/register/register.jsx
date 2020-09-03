import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../../services/userService.js';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            msgError: ""
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressRegister = (ev) => {
        ev.preventDefault();

        let identification = { email: this.state.email };
        let error = validations.validateIdentification(identification);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        userService.signup(identification);
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    render() {
        return (
            <div className="loginPage">
                <form onSubmit={this.pressRegister}>
                    <h3>Do you want join us?</h3>
                    <span className="errorText">{this.state.msgError}</span>
                    <input type="text" placeholder="Email" name="email"
                        value={this.state.email} onChange={this.handleChange}/>
                    <button className="buttonAccess" type="submit">Ask for ur Access!</button>
                </form><br /><br />
                <Link exact to="/">Return Login</Link><br /><br />
                <img src="./fondo.png" alt="fondo" /><br /><br />
                <Link to="/contactMail"><img src="./contactUs.png" width="50px" alt="Contact Us" /></Link><br />
            </div>
        )
    }
}
export default Register;