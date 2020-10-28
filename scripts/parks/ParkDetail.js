import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkDetailsRequested", e => {
    const park = useParks().find(pObj => pObj.id === e.detail.parkId)
    const detailTarget = document.querySelector("#parkDetails");
    detailTarget.innerHTML = park.description;
});