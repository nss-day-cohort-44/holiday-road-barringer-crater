import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkDetailsRequested", e => {
    const id = e.detail.parkId
    const park = useParks().find(pObj => pObj.id === id)
    const detailTarget = document.querySelector("#parkDetails");
    detailTarget.innerHTML = park.description + `<button id="hideParkDetails">Hide Details</button>`;
    eventHub.addEventListener("click", e => {
        if (e.target.id === "hideParkDetails") {
            const detailEvent = new CustomEvent("parkHideDetailsRequested", {
                detail: {
                    parkId: id
                }
            });
            eventHub.dispatchEvent(detailEvent);
        }
    })
});

eventHub.addEventListener("parkHideDetailsRequested", e => {
    const detailTarget = document.querySelector("#parkDetails");
    detailTarget.innerHTML = `<button id="parkDetails--${e.detail.parkId}">Details</button>`
})