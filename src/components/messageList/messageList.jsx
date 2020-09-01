import React from 'react';
import { connect } from 'react-redux';

import './messageList.scss';

import CreateMessage from '../createMessage/createMessage.jsx';
import { messageService } from '../../services/messageService';

class MesssageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0
        }
    }
    //#region Likes
    addLike(_id) {
        let mssgLike = {
            _id: _id, user: this.props.user,
            parentEvent: this.props.messageList[0].parentEvent
        };

        messageService.likeMessage(mssgLike);
    }
    dislike(_id) {
        let mssgLike = {
            _id: _id, user: this.props.user,
            parentEvent: this.props.messageList[0].parentEvent
        };

        messageService.dislikeMessage(mssgLike);
    }
    //#endregion

    deleteMessage(id) {
        let messageDelete = { _id: id, parentEvent: this.props.messageList[0].parentEvent }
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
                            {
                                message.likes.length !== 0 &&
                                    message.likes.find(element => element.id === this.props.user.id) ?
                                    <img className="linkImg" src="./dislike.png" onClick={e => this.dislike(message._id)} alt="dislikePic" />
                                    :
                                    <img className="linkImg" src="./like.png" onClick={e => this.addLike(message._id)} alt="likePic" />
                            }
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
