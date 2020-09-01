import React from 'react';
import { connect } from 'react-redux';

import { utils } from '../../utils/utils.js';
import { messageService } from '../../services/messageService.js';


class CreateMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parentEvent: 0,
            body: '',
            msgError: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {
        this.setState({ parentEvent: this.props.event._id });
    }

    pressCreate = (ev) => {
        ev.preventDefault();

        if (!utils.isNullOrEmpty(this.state.body)) {
            let message = {
                owner: this.props.user,
                parentMessage:0,
                body: this.state.body,
                parentEvent: this.state.parentEvent,
            };
            messageService.createMessage(message);

            const eventMessage = { evetnParentId: this.props.event._id };
            messageService.getAllMessages(eventMessage);
            return;
        }
    }

    render() {
        return (
            <div className="createEvent">
                <div className="centerInfo" >
                    <form onSubmit={this.pressCreate}>
                        <p><label>Message</label>&nbsp;
                            <input type="text" className="longInput" name="body" value={this.state.body || ''}
                                onChange={this.handleChange}></input><br /></p>
                        <button type="submit">Add my message</button><br />
                    </form>
                </div>
            </div>
        )
    }
} const mapStateToProps = ({ users, event }) => ({
    user: users.user,
    event: event.event
});
export default connect(mapStateToProps)(CreateMessage);