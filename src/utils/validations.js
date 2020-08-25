import { utils } from './utils.js';


export const validations = {
    validateIdentification, validateContactUs
};

function validateIdentification(identification) {
    if (utils.isNullOrEmpty(identification.email)) {
        return "Email must be provided.";
    }
};

function validateContactUs(contactUs){
    let error = utils.EMPTY;

    if(utils.isNullOrEmpty(contactUs.message)){ error += ' Message body must be provided. '; }
    if(utils.isNullOrEmpty(contactUs.subject)){ error += ' Subject must be provided. '; }
    if(utils.isNullOrEmpty(contactUs.email)){ error += ' Email must be provided. '; }

    if(!utils.isNullOrEmpty(error)){throw Error(error);}
};