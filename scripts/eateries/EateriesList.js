import {useEateries} from "./EateryProvider.js"

const eventHub = document.querySelector(".container")





// Listens to the eventHub in eateries select and renders dropdown choice to DOM
eventHub.addEventListener("chosenEatery", e => {
  //where do I put these changes?
  // const headerTarget = document.querySelector("#eateryCard h2");
  // const detailTarget = document.querySelector(".eateryContent");
  const contentTarget = document.querySelector("#eateryCard")

  // creates single HTML 'card' to put in contentTarget
  const eateryCardHTML = (eateryObj) => {
    contentTarget.innerHTML = `
      <h2>${eateryObj.businessName}</h2>
      <div class="details" id="eatery--details"></div>
      <button id="eateryDetails--${eateryObj.id}">Details</button>
    `
  }
  //pull parsed ID from select event
  const eateryId = e.detail.chosenEatery
  //pull parsed array from provider
  const eateryArray = useEateries()
  //within that array, when the id matches your chosen id, you add that to eateryCard which is added to the Dom
  const chosenEatery = eateryArray.find(eateryObj => eateryObj.id === eateryId)
  eateryCardHTML(chosenEatery)

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
})

