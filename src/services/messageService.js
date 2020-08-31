import { messageRepository } from '../repositories/messageRepository.js';
import { addMessageListAction } from '../redux/actions/messages.js';

export const messageService = {
    getAllMessages
};

function getAllMessages(eventMessage) {
    messageRepository.getAllMessages(eventMessage)
        .then(res => addMessageListAction(res))
        .catch(error => console.log(error));
};
