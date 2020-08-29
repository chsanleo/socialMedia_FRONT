import { utils } from './utils.js';


export const validations = {
    validateIdentification, validateLogin, validateContactUs, validateUser, validateEvent
};

function validateIdentification(identification) {
    return validateEmail(identification.email)
};

function validateEmail(email) {
    if (!utils.isNullOrEmpty(email)) {
        if (!email.includes('@') || !email.includes('.')) {
            return ' Email must have a correct format. ';
        }
    } else {
        return ' Email must be provided. ';
    }
    return '';
}
function validateLogin(credentials) {

    let error = validateEmail(credentials.email);

    if (utils.isNullOrEmpty(credentials.password)) {
        error += ' Password must be provided. ';
    }

    return error;
};

function validateContactUs(contactUs) {
    let error = utils.EMPTY();

    if (utils.isNullOrEmpty(contactUs.message)) { error += ' Message body must be provided. '; }
    if (utils.isNullOrEmpty(contactUs.subject)) { error += ' Subject must be provided. '; }
    if (utils.isNullOrEmpty(contactUs.email)) { error += ' Email must be provided. '; }

    return error;
};

function validateUser(user) {
    let error = utils.EMPTY();

    if (utils.isNullOrEmpty(user.username)) { error += ' Username must be provided. '; }
    if (utils.isNullOrEmpty(user.name) || utils.isNullOrEmpty(user.surname)) {
        error += ' Name and Surname must be provided. ';
    }
    if (utils.isNullOrEmpty(user.country)) { error += ' Country must be provided. '; }
    if (utils.isNullOrEmpty(user.city)) { error += ' City must be provided. '; }
    if (utils.isNullOrEmpty(user.hobbies)) { error += ' Hobbies must be provided. '; }

    return error;
};

function validateEvent (event){
    let error = utils.EMPTY();

    if (utils.isNullOrEmpty(event.title)) { error += ' Title must be provided. '; }
    if (utils.isNullOrEmpty(event.body)) { error += ' Body must be provided. '; }
    if (utils.isNullOrEmpty(event.type)) { error += ' Type must be provided. '; }
    if (utils.isNullOrEmpty(event.date)) { error += ' Date must be provided. '; }

    return error;
}