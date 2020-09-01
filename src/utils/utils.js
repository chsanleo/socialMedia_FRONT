export const utils = {
    isNullOrEmpty, EMPTY
};

function isNullOrEmpty(variable) {
    return (variable == null || variable === '' || variable === ' ');
};

function EMPTY(){ return  ''; };