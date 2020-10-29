import { useAttractions } from "./AttractionProvider.js"
export const dispatchAttractionDetail=()=>{
// Targets the main element as the eventHub
const eventHub = document.querySelector(".container")


eventHub.addEventListener("attractionDetailsRequested", event => {
    const id = event.detail.attractionId
    // Targets the currently empty div inside the attraction card
const detailContainer = document.querySelector("#attraction--details")
    // Goes through the attractions array and returns the object with the matching id from the attraction selected in the dropdown (see AttractionList.js for the detail id)
    const chosenAttraction = useAttractions().find(attractionObj => attractionObj.id === event.detail.attractionId)
    // Puts the description in the empty div container and adds a hide details button
    detailContainer.innerHTML = `${chosenAttraction.description}
    <button id="hideAttractionDetails">Hide Details</button>`
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "hideAttractionDetails") {
            const hideTheDetails = new CustomEvent("detailsHidden", {
                detail: {
                    attractionId: id
                }
            })
            eventHub.dispatchEvent(hideTheDetails)
        }
    
    })
})


eventHub.addEventListener("detailsHidden", clickEvent => {
        const detailContainer = document.querySelector("#attraction--details")
        detailContainer.innerHTML = `<div class="details" id="attraction--details"><button id="attractionDetails--${clickEvent.detail.attractionId}">Details</button></div>`
})
}
