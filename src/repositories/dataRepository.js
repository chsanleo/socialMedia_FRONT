import axios from 'axios';

export const dataRepository = {
    getAllCountries
};

async function getAllCountries() {
    try {
        const res = await axios.get(`main/getAllCountries`);
        return res.data;
    }
    catch (error) {
        throw Error("Could get list of countries.");
    }
};