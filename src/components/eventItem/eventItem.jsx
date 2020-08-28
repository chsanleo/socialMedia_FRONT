import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                {this.props.eventList?.map(event => (
                    <div key={event._id} >

                        <p>{event.title}</p>
                        <img src={event.pic_path != null ? event.pic_path : 'Activities.png'} />
                        <p>{event.date}</p>

                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ event }) => ({ eventList: event.eventList })
export default connect(mapStateToProps)(EventItem);