import React from 'react';
import { NavLink } from 'react-router-dom';
import { userService } from '../../services/userService.js';

import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            msgError: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressLogin = (ev) => {
        ev.preventDefault();

        let credentials = {
            email: this.state.email,
            password: this.state.password
        };

        let error = validations.validateLogin(credentials);
        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            userService.login(credentials);
            setTimeout(() => {
                this.props.history.push('/init');
            }, 500);

        } catch (error) {
            console.log(error);
            return;
        }
    }
    render() {
        return (
            <div>
                <div className="centerInfo">
                    <form onSubmit={this.pressLogin}>
                        <h2>Login</h2>
                        <span className="errorText">{this.state.msgError}</span>
                        <input className="inputs" type="text" placeholder="Email" name="email"
                            value={this.state.numExpedient} onChange={this.handleChange}></input>
                        <input className="inputs" type="password" placeholder="Password" name="password"
                            value={this.state.password} onChange={this.handleChange}></input><br />
                        <NavLink to="/forgotPass">I forgot my password</NavLink>
                        <br />
                        <button type="submit">LogIn!</button>
                    </form>
                </div>
                <img align="center" src="./fondo.png" alt="fondo"/>
            </div>

        )
    }
}
export default Login;