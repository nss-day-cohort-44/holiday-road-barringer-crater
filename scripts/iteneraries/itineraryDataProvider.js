import { readableObjects } from "./SavedIteneraries.js";
import { useWorkingIteneraries } from "./workingItinerary.js";

// Empty array to eventually store the objects from the local api
let savedItineraries = []
const eventHub = document.querySelector(".container");

// returns a copy of the savedItineraries array so that the original won't be affected
export const useItineraries = () => savedItineraries.slice()

// get's the objects from the local api, converts them to json readable and adds them to the savedItineraries array
export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedItineraries => savedItineraries = parsedItineraries)
}

export const saveItinerary = (itenObj) => {

    return fetch("http://localhost:8088/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itenObj)
    }).then(getItineraries).then(readableObjects)
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "itinerarySave" && e.target.classList.contains("buttonSelectable")) {
        
        saveItinerary(useWorkingIteneraries());
    }
})