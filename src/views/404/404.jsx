import React from 'react';
import { Redirect } from 'react-router-dom';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ redirect: true });
        }, 4000);
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <div align="center">
                <img src="https://media.giphy.com/media/AENoo3Hqtlkf53LWP9/giphy.gif" alt="Lost404"/>
                <h3>Opps... </h3>
            </div>
            
        );
    }
}
export default ErrorPage;