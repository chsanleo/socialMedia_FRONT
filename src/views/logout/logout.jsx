import React from '../../../node_modules/react';
import { Redirect } from '../../../node_modules/react-router-dom';

import { userService } from '../../services/userService.js';

class LogOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        userService.logout();
        setTimeout(() => {
            this.setState({ redirect: true });
        }, 2500);
    }
    render() {
        if (this.state.redirect) {
            return ( <Redirect to={'/'} /> );
        }
        return (
            <h3 align="center">Thanks for use our application!! We gonna miss you!</h3>
        );
    }
}
export default LogOut;