import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../../services/userService.js';

import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';

import './login.scss';

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
    /*
    componentDidCatch(error,errorInfo){
        this.setState({ msgError: errorInfo });
    }*/
    
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
            }, 1000);

        } catch (error) {
            this.setState({ msgError: "Credenciales incorrectas" });
        }
    }
    render() {
        return (
            <div className="loginPage">
                    <form onSubmit={this.pressLogin}>
                        <h2>Login</h2>
                        <span className="errorText">{this.state.msgError}</span><br />
                        <input className="inputs" type="text" placeholder="Email" name="email"
                            value={this.state.numExpedient} onChange={this.handleChange}></input>
                        <input className="inputs" type="password" placeholder="Password" name="password"
                            value={this.state.password} onChange={this.handleChange}></input><br />
                        <Link to="/forgotPass">I forgot my password</Link>
                        <br />
                        <button className="buttonAccess" type="submit">LogIn!</button>
                    </form><br />
                    
                    <p>or</p>
                    <Link to="/register">I want enjoy the App</Link>
                <br /><br /><br />
                 <img src="./fondo.png" alt="fondo" /><br/><br/>
                 <Link to="/contactMail"><img src="./contactUs.png" width="50px" alt="Contact Us"/></Link><br/>
            </div>

        )
    }
}
export default Login;