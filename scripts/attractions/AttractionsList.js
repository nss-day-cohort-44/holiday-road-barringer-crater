import {useAttractions} from "./AttractionProvider.js"
//  Targets the main container as the eventhub
export const dispatchAttractionList=()=>{

const eventHub = document.querySelector(".container")
// Targets the article element with the id of attractionCard
const contentHeader = document.querySelector("#attractionCard h2")
const contentTarget = document.querySelector(".attractionContent")

// Takes an attraction object and puts the html code into the contentContainer. Line 11 is an empty div that the details can populate to once the button is selected
const attractionCardHtml = (attractionObj) => {
    contentHeader.innerHTML = `
        <h2>${attractionObj.name}</h2>`
    contentTarget.innerHTML = `
        <div class="details" id="attraction--details"><button id="attractionDetails--${attractionObj.id}">Details</button></div>
            `
    
}

// Listens for the change event from attractionSelect.js
eventHub.addEventListener("chosenAttraction", event => {
    if(event.detail.chosenAttraction !== 0) {
        const attractionId = event.detail.chosenAttraction
        const attractionArray = useAttractions()
        const chosenAttraction = attractionArray.find(attractionObj => attractionObj.id === attractionId)
        attractionCardHtml(chosenAttraction)
        //create buttons if selected and not selected and add class name to make css work
        document.querySelector("#attractionAdd").className = "buttonSelectable"
    } else {
        document.querySelector("#attractionAdd").className = "buttonUnselectable"
    }
})


// Listens for the click on the attraction card button then dispatches custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("attractionDetails")) {
        const [prefix, attractionId] = clickEvent.target.id.split("--")
        const detailBtnClicked = new CustomEvent("attractionDetailsRequested", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        eventHub.dispatchEvent(detailBtnClicked)
//Create else if add button
    } else if(clickEvent.target.id === "attractionAdd") {
        //console.log("it was clicked")
        const attractionId = document.querySelector("#tripDropDown__attractions").value 
        const addAttractionBtnClicked = new CustomEvent("attractionAdded", {
            detail: {
                attractionId: parseInt(attractionId)
            }
        })
        //console.log("add attraction button clicked")
        eventHub.dispatchEvent(addAttractionBtnClicked)
    }
})
}

