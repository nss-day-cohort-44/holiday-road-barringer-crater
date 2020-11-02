import { saveItinerary, saveItineraryAttraction, saveItineraryEatery } from "./itineraryDataProvider.js"
import { useWorkingIteneraries, checkWorkingItin, useWorkingAttractions, useWorkingEateries } from "./workingItinerary.js";
//import { saveItinerary } from "./itineraryDataProvider.js"



const eventHub = document.querySelector(".container");

let parks = "0";
let eateries = 0;
let attractions = 0;

export const checkItenerary = (ev) => {

    switch (ev.detail.type) {
        case "park":
            parks = ev.detail.parkId;
            break;
        case "eatery":
            eateries = ev.detail.eateryId;
            break;
        case "attraction":
            attractions = ev.detail.attractionId;
            break;
    }
    let e;

    if (parks !== "0" && eateries !== 0 && attractions !== 0) {
        e = new CustomEvent("itenerarySelected");
    } else {
        e = new CustomEvent("iteneraryUnselected");
    }
    eventHub.dispatchEvent(e);
}
export const dispatchItineraryListener = () => {
    eventHub.addEventListener("ParkAdded", checkItenerary);
    eventHub.addEventListener("eateryAdded", checkItenerary);
    eventHub.addEventListener("attractionAdded", checkItenerary);

    eventHub.addEventListener("itenerarySelected", e => {
        if (checkWorkingItin()) {
        document.querySelector("#itinerarySave").className = "buttonSelectable";
        }
        
    });

    eventHub.addEventListener("iteneraryUnselected", e => {
        document.querySelector("#itinerarySave").className = "buttonUnselectable";
    })
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "itinerarySave" && e.target.classList.contains("buttonSelectable")) {
        let itineraryToPush=useWorkingIteneraries()
        saveItinerary(itineraryToPush[0]).then(()=> {
        let itineraryAttractionToPush=useWorkingAttractions()

        for (const attractions of itineraryAttractionToPush){
            saveItineraryAttraction(attractions)
        }

        let itineraryEateryToPush=useWorkingEateries()
        for (const eatery of itineraryEateryToPush){
            saveItineraryEatery(eatery)
        }
    })

    }
})

