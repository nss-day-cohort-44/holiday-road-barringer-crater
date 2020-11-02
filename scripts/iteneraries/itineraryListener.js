import { saveItinerary, saveItineraryAttraction, saveItineraryEatery } from "./itineraryDataProvider.js"
import { useWorkingIteneraries, useWorkingAttractions, useWorkingEateries } from "./workingItinerary.js";

const eventHub = document.querySelector(".container");

let parks = "0";
let eateries = 0;
let attractions = 0;

export const checkItenerary = (ev) => {

    switch (ev.detail.type) {
        case "park":
            parks = ev.detail.chosenPark;
            break;
        case "eatery":
            eateries = ev.detail.chosenEatery;
            break;
        case "attraction":
            attractions = ev.detail.chosenAttraction;
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
    eventHub.addEventListener("chosenPark", checkItenerary);
    eventHub.addEventListener("chosenEatery", checkItenerary);
    eventHub.addEventListener("chosenAttraction", checkItenerary);

    eventHub.addEventListener("itenerarySelected", e => {
        document.querySelector("#itinerarySave").className = "buttonSelectable";
    });

    eventHub.addEventListener("iteneraryUnselected", e => {
        document.querySelector("#itinerarySave").className = "buttonUnselectable";
    })
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "itinerarySave" && e.target.classList.contains("buttonSelectable")) {
        let itineraryToPush=useWorkingIteneraries()
        saveItinerary(itineraryToPush[0]);
        let itineraryAttractionToPush=useWorkingAttractions()
        for (const attractions of itineraryAttractionToPush){
            saveItineraryAttraction(attractions)
        }
        let itineraryEateryToPush=useWorkingEateries()
        for (const eatery of itineraryEateryToPush){
            saveItineraryEatery(eatery)
        }

    }
})

// eventHub.addEventListener("click", e => {
//     if (e.target.id === "itinerarySave" && e.target.classList.contains("buttonSelectable")) {
//         let theIdentifier=useWorkingIteneraries()
//         const itineraryObj = {
//             ParkId: theIdentifier[0]
//         }
//         console.log(itineraryObj)
//         // saveItinerary(itineraryObj);
//         // saveItineraryAttraction(itineraryObj)
//         // saveItineraryEatery(itineraryObj)
//     }
// })