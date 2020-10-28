import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector(".container");

eventHub.addEventListener("chosenPark", e => {
    const headerTarget = document.querySelector("#parkCard h2");
    const detailTarget = document.querySelector(".parkContent");

    headerTarget.innerHTML = useParks().find(park => park.id === e.detail.chosenPark).fullName;
    detailTarget.innerHTML = `<p>Weather goes here</p>
    <button>Details</button>`
});

