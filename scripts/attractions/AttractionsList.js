import {useAttractions} from "./AttractionProvider.js"
//  Targets the main container as the eventhub
const eventHub = document.querySelector(".container")
// Targets the article element with the id of attractionCard
const contentContainer = document.querySelector("#attractionCard")

// Takes an attraction object and puts the html code into the contentContainer
const attractionCardHtml = (attractionObj) => {
    contentContainer.innerHTML = `
        <h2>${attractionObj.name}</h2>
            <button id="attractionDetails--${attractionObj.id}">Details</button>
    `
}

// Listens for the change event from attractionSelect.js
eventHub.addEventListener("chosenAttraction", event => {
        const attractionId = event.detail.chosenAttraction
        const attractionArray = useAttractions()
        const chosenAttraction = attractionArray.find(attractionObj => attractionObj.id === attractionId)
        attractionCardHtml(chosenAttraction)
})


// Listens for the click on the attraction card button then dispatches custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("attractionDetails")) {
        const [prefix, attractionId] = clickEvent.target.id.split("--")
        const detailBtnClicked = new CustomEvent("attractionDetailsRequested", {
            detail: {
                attractionId,
            }
        })
        eventHub.dispatchEvent(detailBtnClicked)
    }
})