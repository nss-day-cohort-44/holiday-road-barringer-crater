import {getEateries, useEateries} from "./EateryProvider.js"


const contentTarget = document.querySelector("#tripDropDown__eatery")
const eventHub = document.querySelector(".container")


export const EateriesSelect = () => {
 
  getEateries()
    .then(() => {
      const eateriesArray = useEateries();
      contentTarget.innerHTML = eateriesArray.map(eatery => 
      `<option value=0>Please select an eatery</option>
      <option value = ${eatery.id}>${eatery.businessName}</option>`)
  })
}

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "tripDropDown__eatery") {
    //console.log("change in dropdown")
    const eatery = new CustomEvent("chosenEatery", {
      detail: {
        chosenEatery: parseInt(changeEvent.target.value)
      }
    })
    eventHub.dispatchEvent(eatery)
  }
})