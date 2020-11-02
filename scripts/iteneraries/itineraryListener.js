import { saveItinerary } from "./itineraryDataProvider.js"
import { useWorkingIteneraries, checkWorkingItin } from "./workingItinerary.js";


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
        const itenObj = {
            itenerary: useWorkingIteneraries()
        }
        saveItinerary(itenObj);
    }
})