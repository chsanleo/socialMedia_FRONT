import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            msgError: ''
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }
    
    pressLogin = (ev) => {
        
    }
    render() {
        return (
            <div>
               landing
            </div>
        )
    }
}
export default Landing;