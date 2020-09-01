import React from 'react';
import { connect } from 'react-redux';

import './messageList.scss';

import CreateMessage from '../createMessage/createMessage.jsx';
import { messageService } from '../../services/messageService';

class MesssageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }
    //#region Likes
    haveLike() {/*
        if (message.likes.length !== 0) {
            if (message.likes.find(element => element.id === this.props.user.id)) {
                return (<img className="linkImg" src="./dislike.png" onClick={this.dislike(message._id)} alt="dislikePic" />);
            }
        }
        return (<img className="linkImg" src="./like.png" onClick={this.addLike(message._id)} alt="likePic" />);
    */
        return ('');
    }
    /*addLike(_id) {
        let mssgLike = { _id: _id, user: this.props.user};
        messageService.likeMessage(mssgLike);
        
       // let eventMessage = { parentEvent: this.props.event._id };
       // messageService.getAllMessages(eventMessage);
    }
    dislike(_id) {
        let mssgLike = { _id: _id, user: this.props.user
         };
        messageService.dislikeMessage(mssgLike);
        
       // let eventMessage = { parentEvent: this.props.event._id };
        //messageService.getAllMessages(eventMessage);
    }*/
    //#endregion

    deleteMessage(id) {
        let messageDelete = { _id: id }
        messageService.deleteMessage(messageDelete);
    }


    cleanDate(date) {
        return (date.split('T')[0]);
    }

    render() {
        return (
            <div>
                {this.props.messageList?.map(message => (
                    <div className="messageEvent" key={message._id}>
                        {
                        message.owner[0].id === this.props.user.id ?
                            <img src="./delete.png" onClick={e => this.deleteMessage(message._id)}
                                width="20px" alt="deletePic" />
                            : ''
                            }
                        <img className="profilePicList"
                            src={message.owner[0].pic_path !== '' ? message.owner[0].pic_path : './defaultProfile.png'}
                            onClick={e => this.props.profile(message.owner[0])}
                            alt="profilePic"
                            title={message.owner[0].username} />
                        &nbsp;&nbsp;{this.cleanDate(message.createdAt)}&nbsp;by&nbsp;{message.owner[0].username}
                        {this.haveDelete}
                        <div>
                            {message.body}<br />
                            {message.likes.length}
                            {this.haveLike}
                        </div>
                    </div>
                ))}
                <CreateMessage />
            </div>

        )
    }
}

const mapStateToProps = ({ message, users, event }) => ({
    messageList: message.messageList,
    event: event.event,
    user: users.user,
});
export default connect(mapStateToProps)(MesssageList);
