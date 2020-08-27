import { dataRepository } from '../repositories/dataRepository.js';
import { addCountries } from '../redux/actions/data.js';

export const dataService = {
    getAllCountries
};

function getAllCountries() {
    dataRepository.getAllCountries()
        .then(res => addCountries(res))
        .catch(error => console.log(error));
};
