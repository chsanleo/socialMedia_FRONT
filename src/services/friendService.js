import { friendRepository } from '../repositories/friendRepository.js';

export const friendService = {
    askFriendShip
};

function askFriendShip(friendRequest) {
    friendRepository.askFriendShip(friendRequest)
        .then()
        .catch(error => { console.log(error) });
};