import { useEateries } from "./EateryProvider.js"

// Targets the main element as the eventHub
const eventHub = document.querySelector(".container")


eventHub.addEventListener("eateryDetailsRequested", event => {
    // Targets the currently empty div inside the attraction card
const detailContainer = document.querySelector("#eatery--details")
    // Goes through the array and returns the object with the matching id from the attraction selected in the dropdown (see AttractionList.js for the detail id)
    const chosenEatery = useEateries().find(eateryObj => eateryObj.id === event.detail.eateryId)
    // Puts the description in the empty div container and adds a hide details button
    detailContainer.innerHTML = `${chosenEatery.description}
    <button id="hideEateryDetails">Hide Details</button>`
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideEateryDetails") {
        const detailContainer = document.querySelector("#eatery--details")
        detailContainer.innerHTML = ""
    }
})