import { eventRepository } from '../repositories/eventRepository.js';
import { addEventsAction } from '../redux/actions/event.js';

export const eventService = {
    getAllEvents, createEvent
};

function getAllEvents(eventType) {
    eventRepository.getAllEvents(eventType)
        .then(res => addEventsAction(res))
        .catch(error => console.log(error));
};
function createEvent(event) {
    eventRepository.createEvent(event)
        .then()
        .catch(error => console.log(error));
};