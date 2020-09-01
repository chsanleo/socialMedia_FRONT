import { messageRepository } from '../repositories/messageRepository.js';
import { addMessageListAction } from '../redux/actions/messages.js';

export const messageService = {
    getAllMessages, createMessage,
    likeMessage, dislikeMessage, deleteMessage
};

function getAllMessages(eventMessage) {
    messageRepository.getAllMessages(eventMessage)
        .then(res => addMessageListAction(res))
        .catch(error => console.log(error));
};
function createMessage(message){
    messageRepository.createMessage(message)
        .then()
        .catch(error => console.log(error));
};
function likeMessage(message){
    messageRepository.likeMessage(message)
        .then( )
        .catch(error => console.log(error));
};
function dislikeMessage(message){
    messageRepository.dislikeMessage(message)
        .then()
        .catch(error => console.log(error));
};
function deleteMessage(message){
    messageRepository.deleteMessage(message)
        .then()
        .catch(error => console.log(error));
};
