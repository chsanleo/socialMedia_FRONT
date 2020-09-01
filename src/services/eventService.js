import { eventRepository } from '../repositories/eventRepository.js';
import { addEventListAction, addEventAction } from '../redux/actions/event.js';

export const eventService = {
    getAllEvents, createEvent, joinEvent, likeEvent,
     dislikeEvent, detailEvent, deleteEvent
};

function getAllEvents(eventType) {
    eventRepository.getAllEvents(eventType)
        .then(res => addEventListAction(res))
        .catch(error => console.log(error));
};

function createEvent(event) {
    eventRepository.createEvent(event)
        .then()
        .catch(error => console.log(error));
};

function joinEvent(userIntoEvent) {
    eventRepository.joinEvent(userIntoEvent)
        .then(res => { addEventAction(res); })
        .catch(error => console.log(error));
};

function likeEvent(userIntoEvent) {
    eventRepository.likeEvent(userIntoEvent)
        .then(res => { addEventAction(res); })
        .catch(error => console.log(error));
};

function dislikeEvent(userIntoEvent) {
    eventRepository.dislikeEvent(userIntoEvent)
        .then(res => { addEventAction(res); })
        .catch(error => console.log(error));
};

function detailEvent(event) {
    addEventAction(event);
};

function deleteEvent(event) {
    eventRepository.deleteEvent(event)
        .then()
        .catch(error => console.log(error));
}