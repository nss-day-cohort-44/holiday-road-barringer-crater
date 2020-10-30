import {useEateries} from "./EateryProvider.js"

export const dispatchEatariesList=()=>{

const eventHub = document.querySelector(".container")





// Listens to the eventHub in eateries select and renders dropdown choice to DOM
eventHub.addEventListener("chosenEatery", e => {
  if(e.detail.chosenEatery) {
  //where do I put these changes?
  // const headerTarget = document.querySelector("#eateryCard h2");
  // const detailTarget = document.querySelector(".eateryContent");
  const contentHeader = document.querySelector("#eateryCard h2")
  const contentTarget = document.querySelector(".eateryContent")

  // creates single HTML 'card' to put in contentTarget
  const eateryCardHTML = (eateryObj) => {
    contentHeader.innerHTML = `
      <h2>${eateryObj.businessName}</h2>`
    contentTarget.innerHTML = `
      <div class="details" id="eatery--details"><button id="eateryDetails--${eateryObj.id}">Details</button></div>
      `
  }
  //pull parsed ID from select event
  const eateryId = e.detail.chosenEatery
  //pull parsed array from provider
  const eateryArray = useEateries()
  //within that array, when the id matches your chosen id, you add that to eateryCard which is added to the Dom
  const chosenEatery = eateryArray.find(eateryObj => eateryObj.id === eateryId)
  eateryCardHTML(chosenEatery)
  document.querySelector("#eateryAdd").className = "buttonSelectable"
} else {
  document.querySelector("#eateryAdd").className = "buttonUnselectable"

}

})

//make eventhub to listen for and dispatch when event detail button is clicked
eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("eateryDetails--")) {
      const [prefix, eateryId] = e.target.id.split("--");
      const eateryDetailClicked = new CustomEvent("eateryDetailsRequested", {
          detail: {
              //turn the id you split above into a number, not string
              eateryId: parseInt(eateryId)
          }
      })
      //console.log("eaterybutton clicked", eateryDetailClicked)
      eventHub.dispatchEvent(eateryDetailClicked);
  }
  else if(e.target.id === "eateryAdd") {
    //console.log("it was clicked")
    const eateryId = document.querySelector("#tripDropDown__eatery").value 
    const addEateryBtnClicked = new CustomEvent("eateryAdded", {
        detail: {
            eateryId: parseInt(eateryId)
        }
    })
    console.log("Does this work?",addEateryBtnClicked)
    eventHub.dispatchEvent(addEateryBtnClicked)
}
})
}
