import { getAttractions, useAttractions } from "./AttractionProvider.js"

const eventHub=document.querySelector(".container") 

// this part populates the attraction dropdown menu from the api
const contentTarget=document.querySelector("#tripDropDown__attractions")

getAttractions().then(()=>{
        const attactionsList=useAttractions()
        contentTarget.innerHTML=
        `
        <option id=0> Please select an attraction</option>
        ${attactionsList.map(attraction => `<option value=${attraction.id}>${attraction.name}</option>`)}`
     })


// this is the event listener which dispatches the chosen attractions id as the value
eventHub.addEventListener("change", event => {
    if (event.target.id === "tripDropDown__attractions") {
        const attraction = new CustomEvent("chosenAttraction", {
            detail: {
                chosenAttraction: parseInt(event.target.value)
            }
        })
        console.log(attraction)
        eventHub.dispatchEvent(attraction)
    }
})
