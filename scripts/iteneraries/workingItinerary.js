import { useAttractions } from "../attractions/AttractionProvider.js"

//attractionAdded
const eventHub = document.querySelector(".container")


//to put selections in working aside
export const dispatchWorkingItinerary = () => {
  let workingItinerariesArray=[]
  eventHub.addEventListener("attractionAdded", e => {
    //console.log("hi")
    const contentTarget = document.querySelector(".workingItineraries")
    const attractionsArray = useAttractions()
    
    const currentAttraction = attractionsArray.find(attractionObj => attractionObj.id === e.detail.attractionId)
    // console.log(currentAttraction)
    if (e.detail.attractionId !== 0) {
      contentTarget.innerHTML += `
        <h3>${currentAttraction.name}</h3>
      `
      workingItinerariesArray.push({
        id:currentAttraction.id,
        type:"attraction"
      })
      // console.log(workingItinerariesArray)
    }
    //ends if
  })//ends eventHub
} //ends export

//parksArr.find(parkObj => parkObj.id === itinerary.parkId)

// eventHub.addEventListener("change", event => {
//   if (event.target.id === "tripDropDown__attractions") {
//       console.log("I'm broadcasting")
//       const attraction = new CustomEvent("chosenAttraction", {
//           detail: {
//               chosenAttraction: parseInt(event.target.value)
//           }
//       })
//       // console.log(attraction)
//       eventHub.dispatchEvent(attraction)
//   }
// })
// }