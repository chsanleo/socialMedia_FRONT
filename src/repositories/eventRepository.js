import axios from 'axios';

export const eventRepository = {
    getAllEvents, createEvent
};

async function getAllEvents() {
    let token = localStorage.getItem('authToken');
    console.log(token);
    try {
        const res = await axios.get(`event/events`, /*{
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