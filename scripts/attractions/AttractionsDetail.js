import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("attractionDetailsRequested", event => {
    const chosenAttraction = useAttractions().find(attractionObj => attractionObj.id === event.detail.attractionId)
    const detailContainer = document.querySelector("#attraction--details");
    detailContainer.innerHTML = chosenAttraction.description;
});
