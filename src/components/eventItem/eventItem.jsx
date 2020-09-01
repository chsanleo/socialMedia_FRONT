import React from 'react';
import { connect } from 'react-redux';

import './eventItem.scss';

import {userService} from '../../services/userService.js';

class EventItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    cleanDate(date){
        return (date.split('T')[0]);
    }

    profile(extUser) {
        let user = { id: extUser.id };
        userService.getExtProfile(user);
        //this.props.history.push('/profileExt');
    }

    render() {
        return (
            <div className="eventItem" >
                {this.props.eventList?.map(event => (
                    <div key={event._id}>
                        <h3>{event.title}</h3><p>{this.cleanDate(event.date)}</p>
                        <img src={event.pic_path !== '' ? event.pic_path : 'Activities.png'}
                            onClick={e => this.props.setEvent( event )}
                            alt ="eventPic" />
                        <p className="createBy" onClick={e => this.profile(event.owner[0])}>Create by: {event.owner[0].username} </p>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ event }) => ({ eventList: event.eventList })
export default connect(mapStateToProps)(EventItem);