import React from 'react';
import { connect } from 'react-redux';

import './eventItem.scss';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    cleanDate(date){
        let dateClean = date.split('T');
        return (dateClean[0]);
    }

    render() {
        return (
            <div className="eventItem" >
                {this.props.eventList?.map(event => (
                    <div key={event._id} >
                        <h3>{event.title}</h3><p>{this.cleanDate(event.date)}</p>
                        <img src={event.pic_path != null ? event.pic_path : 'Activities.png'} />
                        <p className="createBy">Create by: {event.owner[0].username}</p>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ event }) => ({ eventList: event.eventList })
export default connect(mapStateToProps)(EventItem);