import keys from "../Settings.js"

export const dispatchDirectionsProvider = () => {

    const getLocation = (place) => {
        return fetch(`https://graphhopper.com/api/1/geocode?q=${place}
        &limit=10&key=${keys.graphhopperKey}&provider=nominatim`)
        .then(response => response.json())
        .then(parsedResponse => console.log(parsedResponse));
    }

    getLocation("Great Falls, MT");
}