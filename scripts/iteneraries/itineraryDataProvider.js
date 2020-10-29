// Empty array to eventually store the objects from the local api
let savedItineraries = []

// returns a copy of the savedItineraries array so that the original won't be affected
export const useItineraries = () => savedItineraries.slice()

// get's the objects from the local api, converts them to json readable and adds them to the savedItineraries array
export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedItineraries => savedItineraries = parsedItineraries)
}