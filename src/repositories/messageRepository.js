import axios from 'axios';

export const messageRepository = {
    getAllMessages
};

async function getAllMessages(eventMessages) {
    try {
        const res = await axios.post(`msg/messages`, eventMessages);
        return res.data;
    }
    catch (error) {
        throw Error("Could get list of countries.");
    }
};