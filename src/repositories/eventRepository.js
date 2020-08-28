import axios from 'axios';
import { utils } from '../utils/utils';

export const eventRepository = {
    getAllEvents, createEvent
};

async function getAllEvents(type) {
    let token  = localStorage.getItem('authToken');
    if(!utils.isNullOrEmpty(token)){ axios.defaults.headers.authorization = token }
    else{token ="no hay";}

    //console.log(token);
    try {
        const res = await axios.post(`event/events`,type/*, {
            headers: { 'authorization': token }
        }*/);
        return res.data;
    }
    catch (error) {
        console.log(error)
        throw Error("Could not get any event.");
    }
};

async function createEvent(event) {
    try {
        const res = await axios.post(`event/create`, event);
        return res.data;
    }
    catch (error) {
        console.log(error)
        throw Error("Could not create event.");
    }
};