import {getEateries, useEateries} from "./EateryProvider.js"

export const dispatchEatariesSelect=()=>{

const contentTarget = document.querySelector("#tripDropDown__eatery")
const eventHub = document.querySelector(".container")


//const export EateriesSelect = () => {
 
  getEateries()
    .then(() => {
      const eateriesArray = useEateries();
      contentTarget.innerHTML = 
      `<option value=0>Please select an eatery</option>
      ${eateriesArray.map(eatery => `<option value=${eatery.id}>${eatery.businessName}</option>`)}`
      
  })
//}



eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "tripDropDown__eatery" && changeEvent.target.value !== "0") {
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
}