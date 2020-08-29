import React from 'react';
import { connect } from 'react-redux';

import './eventItem.scss';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="eventItem" >
                {this.props.eventList?.map(event => (
                    <div key={event._id} >
                        <h3>{event.title}</h3><p>{event.date}</p>
                        <img src={event.pic_path != null ? event.pic_path : 'Activities.png'} />
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ event }) => ({ eventList: event.eventList })
export default connect(mapStateToProps)(EventItem);