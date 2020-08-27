import { eventRepository } from '../repositories/eventRepository.js';
import { addEvents } from '../redux/actions/event.js';

export const eventService = {
    getAllEvents, createEvent
};

function getAllEvents() {
    eventRepository.getAllEvents()
        .then(res => addEvents(res))
        .catch(error => console.log(error));
};
function createEvent(event) {
    eventRepository.createEvent(event)
        .then()
        .catch(error => console.log(error));
};