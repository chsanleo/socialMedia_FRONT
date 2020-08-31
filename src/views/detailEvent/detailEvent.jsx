import React from 'react';
import { connect } from 'react-redux';

import NavLeft from '../../components/navLeft/navLeft.jsx';
import { eventService } from '../../services/eventService.js';
import { utils } from '../../utils/utils.js';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
        this.addLike = this.addLike.bind(this);
        this.join = this.join.bind(this);
    }

    componentDidMount() {
        /*if (this.props.event === undefined || this.props.user === undefined) { 
            this.props.history.push('/');
         }*/
        if (this.props.user.id === undefined) { this.props.history.push('/'); }
        console.log(this.props.user)
        console.log(this.props.event)
    }

    //#region beauty helpers 
    ownerOptions() {
        console.log(this.props.event.owner)
        if (this.props.event.owner.find(element => element.id === this.props.user.id)) {
            return (
                <div>
                    <img src="./update.png" onClick={this.updateEvent} width="20px" alt="updatePic" />&nbsp;
                    <img src="./delete.png" onClick={this.deleteEvent} width="20px" alt="deletePic" />
                </div>
            );
        }
    }
    IMGlink() {
        if (!utils.isNullOrEmpty(this.props.event.pic_path)) { return (this.props.event.pic_path); }
        return ('./Activities.png');
    }
    cleanDate(date) {
        return (date.split('T')[0]);
    }
    numberLikes() {
        return (this.props.event.userLikes.length);
    }
    numberJoins() {
        return (this.props.event.userJoin.length);
    }
    //#endregion

    //#region Likes Logic
    addLike() {
        let userIntoEvent = { _id: this.props.event._id, user: this.props.user };
        eventService.likeEvent(userIntoEvent);
    }
    dislike() {
        let userIntoEvent = { _id: this.props.event._id, user: this.props.user };
        eventService.dislikeEvent(userIntoEvent);
    }
    haveLike() {
        if (this.props.event.userLikes.length !== 0) {
            if (this.props.event.userLikes.find(element => element.id === this.props.user.id)) {
                return (<img className="linkImg" src="./dislike.png" onClick={this.dislike} alt="dislikePic" />);
            }
        }
        return (<img className="linkImg" src="./like.png" onClick={this.addLike} alt="likePic" />);
    }
    //#endregion

    //#region Join Logic
    join() {
        let userIntoEvent = { _id: this.props.event._id, user: this.props.user };
        eventService.joinEvent(userIntoEvent);
    }
    haveJoin() {
        if (this.props.event.userJoin.length !== 0) {
            if (this.props.event.userJoin.find(element => element.id === this.props.user.id)) {
                return (/*<img className="linkImg" src="./unjoin.png" onClick={this.unJoin} alt="unjoinPic"/>*/'');
            }
            return (<img className="linkImg" src="./join.png" onClick={this.join} alt="joinPic" />);
        }
    }
    whoJoinedIt() {
        if (this.props.event.userJoin.length !== 0) { return (''); }
         
    }
    //#endregion

    //#region Delete
    deleteEvent() {
        console.log('delete')
    }
    //#endregion

    //#region Update
    updateEvent() {
        console.log('update')
    }
    //#endregion

    render() {
        return (
            <div className="createEvent">
                {<div className="leftMenu"><NavLeft /></div>}
                <div className="centerInfo" >
                    <h2>Event information  {this.ownerOptions()}</h2>
                    <div className="formsFormat">
                        <div className="image">
                            <img src={this.IMGlink()} width="200px" alt="eventPhoto" /><br />
                            <p>Likes: {this.numberLikes()}</p> {this.haveLike()}
                            <p>User join this activity : {this.numberJoins()} </p>
                            {this.whoJoinedIt()}
                            {this.haveJoin()}


                            <br />
                        </div>
                        <div>
                            <span className="errorText">{this.state.msgError}</span>
                            <p><label>Title:</label>&nbsp;{this.props.event.title}</p>
                            <p><label>Date of event:</label>&nbsp;{this.cleanDate(this.props.event.date)}</p>
                            <p><label>City: </label>&nbsp;{this.props.event.city}</p>
                            <p><label>Country: </label> {this.props.event.country}</p>
                            <p><label>Type: </label> {this.props.event.type}</p>
                        </div>
                        <div>
                            <p width="25%"><label>Body:</label>&nbsp;{this.props.event.body}</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users, event }) => ({
    user: users?.user,
    event: event.event
});
export default connect(mapStateToProps)(CreateEvent);