import {getEateries, useEateries} from "./EateryProvider.js"


const contentTarget = document.querySelector("#tripDropDown__eatery")
const eventHub = document.querySelector(".container")


//const export EateriesSelect = () => {
 
  getEateries()
  .then(() => {
    const eateriesArray = useEateries()

   contentTarget.innerHTML = 
    `<option value=0>Please select an eatery</option>
    ${eateriesArray.map(eatery => {
      if (eatery.ameneties.wheelchairAccessible == true) {
        return `<option value=${eatery.id}>${eatery.businessName}</option>`}})}`    
    })
  


eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "tripDropDown__eatery") {
    //console.log("change in dropdown")
    const eatery = new CustomEvent("chosenEatery", {
      detail: {
        chosenEatery: parseInt(changeEvent.target.value)
      }
    })
    console.log(eatery)
    eventHub.dispatchEvent(eatery)
  }
})

