import axios from 'axios';
import { utils } from '../utils/utils';

export const eventRepository = {
    getAllEvents, createEvent, joinEvent, likeEvent, dislikeEvent, deleteEvent
};

async function getAllEvents(type) {
    let token = localStorage.getItem('authToken');
    if (!utils.isNullOrEmpty(token)) { axios.defaults.headers.authorization = token }
    else { token = "no hay"; }

    //console.log(token);
    try {
        const res = await axios.post(`event/events`, type/*, {
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
async function joinEvent(userIntoEvent) {
    try {
        const res = await axios.post(`event/joinEvent`, userIntoEvent);
        return res.data;
    }
    catch (error) {
        console.log(error)
        throw Error("Could not create event.");
    }
};
async function likeEvent(userIntoEvent) {
    try {
        const res = await axios.post(`event/likeEvent`, userIntoEvent);
        return res.data;
    }
    catch (error) {
        console.log(error)
        throw Error("Could not create event.");
    }
};
async function dislikeEvent(userIntoEvent) {
    try {
        const res = await axios.post(`event/unlikeEvent`, userIntoEvent);
        return res.data;
    }
    catch (error) {
        throw Error("Could not dislike event.");
    }
};

async function deleteEvent(event) {
    try {
        const res = await axios.post(`event/delete`, event);
        return res.data;
    }
    catch (error) {
        throw Error("Could not delete event.");
    }
};