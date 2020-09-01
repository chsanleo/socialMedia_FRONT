import axios from 'axios';

export const messageRepository = {
    getAllMessages, createMessage,
    likeMessage, dislikeMessage, deleteMessage
};

async function getAllMessages(eventMessages) {
    try {
        console.log(eventMessages)
        const res = await axios.post(`msg/messages`, eventMessages);
        return res.data;
    }
    catch (error) {
        throw Error("Could not  get list of messages.");
    }
};
async function createMessage(message) {
    try {
        const res = await axios.post(`msg/create`, message);
        return res.data;
    }
    catch (error) {
        throw Error("Could not create message.");
    }
};
async function likeMessage(mssgLike) {
    try {
        const res = await axios.post(`msg/likeMessage`, mssgLike);
        return res.data;
    }
    catch (error) {
        throw Error("Could not like message.");
    }
};
async function dislikeMessage(mssgLike) {
    try {
        const res = await axios.post(`msg/dislikeMessage`, mssgLike);
        return res.data;
    }
    catch (error) {
        throw Error("Could not unlike message.");
    }
};
async function deleteMessage(mssg) {
    try {
        const res = await axios.post(`msg/delete`, mssg);
        return res.data;
    }
    catch (error) {
        throw Error("Could not delete message.");
    }
};