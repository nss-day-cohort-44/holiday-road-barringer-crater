import { readableObjects } from "./SavedIteneraries.js";
import { useWorkingAttractions, useWorkingIteneraries } from "./workingItinerary.js";

// Empty array to eventually store the objects from the local api
let savedItineraries = []
let savedItineraryEateries = []
let savedItineraryAttractions = []

const eventHub = document.querySelector(".container");

// returns a copy of the savedItineraries array so that the original won't be affected
export const useItineraries = () => savedItineraries.slice()
export const useItinerariesEateries = () => savedItineraryEateries.slice()
export const useItinerariesAttractions = () => savedItineraryAttractions.slice()

// get's the objects from the local api, converts them to json readable and adds them to the savedItineraries array
export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
        .then(response => response.json())
        .then(parsedItineraries => savedItineraries = parsedItineraries)
}

export const getItinerariesEateries = () => {
    return fetch("http://localhost:8088/itineraryEatery")
        .then(response => response.json())
        .then(parsedItineraries => savedItineraryEateries = parsedItineraries)
}

export const getItinerariesAttractions = () => {
    return fetch("http://localhost:8088/itineraryAttraction")
        .then(response => response.json())
        .then(parsedItineraries => savedItineraryAttractions = parsedItineraries)
}


let nextID=""
// push park into itineraryArray
export const saveItinerary = (itinObj) => {
    return fetch("http://localhost:8088/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinObj)
    }).then(response=>response.json()).then(parseResponse=> nextID=parseResponse.id)
        // .then(getItineraries)
     // .then(readableObjects)
}
// push the Itineraries Attraction into that array
export const saveItineraryAttraction = (itinObj) => {
    itinObj.itineraryId=nextID
    return fetch("http://localhost:8088/itineraryAttraction", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinObj)
    })
}
// push the Itineraries Eatery into that array
export const saveItineraryEatery = (itinObj) => {
    itinObj.itineraryId=nextID

    return fetch("http://localhost:8088/itineraryEatery", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinObj)
    })   
}
eventHub.addEventListener("click", e => {
    if (e.target.id === "itinerarySave" && e.target.classList.contains("buttonSelectable")) {
        const itineraryObj = {
            testing: "Is this going to push?"
        }

        saveItinerary(itineraryObj);
        saveItineraryAttraction(itineraryObj)
        saveItineraryEatery(itineraryObj)
    }
})
