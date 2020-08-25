import { utils } from './utils.js';


export const validations = {
    validateIdentification, validateLogin, validateContactUs
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
    let error = utils.EMPTY;

    if (utils.isNullOrEmpty(contactUs.message)) { error += ' Message body must be provided. '; }
    if (utils.isNullOrEmpty(contactUs.subject)) { error += ' Subject must be provided. '; }
    if (utils.isNullOrEmpty(contactUs.email)) { error += ' Email must be provided. '; }

    if (!utils.isNullOrEmpty(error)) { throw Error(error); }
};