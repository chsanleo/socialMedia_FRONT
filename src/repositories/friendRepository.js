import axios from 'axios';

export const friendRepository = {
    askFriendShip
};

async function askFriendShip(friendRequest) {
    try {
        const res = await axios.post(`friend/friendrequest`, friendRequest);
        return res.data;
    }
    catch (error) {
        throw Error("Could not  get list of messages.");
    }
};