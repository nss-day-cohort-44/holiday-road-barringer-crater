import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector(".container");

eventHub.addEventListener("chosenPark", e => {
    const headerTarget = document.querySelector("#parkCard h2");
    const detailTarget = document.querySelector(".parkContent");

    headerTarget.innerHTML = useParks().find(park => park.id === e.detail.chosenPark).fullName;
    detailTarget.innerHTML = `<p>Weather goes here</p>
    <div class="details" id="parkDetails">
    <button id="parkDetails--${e.detail.chosenPark}">Details</button>`;
});

eventHub.addEventListener("click", e => {
    if(e.target.id.startsWith("parkDetails--")) {
        const [temp, id] = e.target.id.split("--");
        const detailEvent = new CustomEvent("parkDetailsRequested", {
            detail: {
                parkId: id
            }
        });
        eventHub.dispatchEvent(detailEvent);
    }
});