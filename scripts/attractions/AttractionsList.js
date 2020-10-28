import {useAttractions} from "./AttractionProvider.js"
//  Targets the main container as the eventhub
const eventHub = document.querySelector(".container")
// Targets the article element with the id of attractionCard
const contentContainer = document.querySelector("#attractionCard")

// Takes an attraction object and puts the html code into the contentContainer
const attractionCardHtml = (attractionObj) => {
    contentContainer.innerHTML = `
        <h2>${attractionObj.name}</h2>
            <button>Details</button>
    `
}

// Listens for the change event from attractionSelect.js
eventHub.addEventListener("chosenAttraction", event => {
    if (event.target.id === "tripDropDown__attraction") {
        const attractionId = event.target.value
        const attractionArray = useAttractions()
        const chosenAttraction = attractionArray.find(attractionObj => attractionObj.id === attractionId)
        attractionCardHtml(chosenAttraction)
    }
})