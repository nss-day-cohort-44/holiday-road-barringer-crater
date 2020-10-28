import { useAttractions } from "./AttractionProvider.js"

// Targets the main element as the eventHub
const eventHub = document.querySelector(".container")
// Targets the currently empty div inside the attraction card
const detailContainer = document.querySelector("#attraction--details")

eventHub.addEventListener("attractionDetailsRequested", event => {
    // Goes through the attractions array and returns the object with the matching id from the attraction selected in the dropdown (see AttractionList.js for the detail id)
    const chosenAttraction = useAttractions().find(attractionObj => attractionObj.id === event.detail.attractionId)
    detailContainer.innerHTML = chosenAttraction.description;
});
