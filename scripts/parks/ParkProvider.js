import keys from "../Settings.js";
let parks = [];

export const useParks = () => {
    return parks.data.slice();
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        parks = parsedResponse;
    });
}