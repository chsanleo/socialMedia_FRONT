import axios from 'axios';

export const contactRepository = {
    createContactUs
};

async function createContactUs(contactMail) {
    try {
        const res = await axios.post(`api/contact/`, contactMail);
        return res.data;
    }
    catch (error) {
        throw Error("Error back updateContactUs.");
    }
};
