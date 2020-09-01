import { contactRepository } from '../repositories/contactRepository.js';

export const contactService = {
    createContactMail
};

function createContactMail(contactMail) {
    contactRepository.createContactUs(contactMail)
        .then()
        .catch(error => { console.log(error) });
};