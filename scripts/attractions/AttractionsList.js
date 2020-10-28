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
// When you come back, do the split on the button id to find the attraction id and add it to line 31
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("attractionDetails")) {
        console.log("I'm broadcasting!")
        const detailBtnClicked = new CustomEvent("attractionDetailsRequested", {
            detail: {
                attractionId: 2
            }
        })
        eventHub.dispatchEvent(detailBtnClicked)
    }
})