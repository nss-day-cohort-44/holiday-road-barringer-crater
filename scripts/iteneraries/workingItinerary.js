import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"

//attractionAdded
const eventHub = document.querySelector(".container")


//to put selections in working aside
export const dispatchWorkingItinerary = () => {
  let workingItinerariesArray=[]
  const contentTarget = document.querySelector(".workingItineraries")

  eventHub.addEventListener("attractionAdded", e => {
    
    if (e.detail.attractionId !== 0) {
      const attractionsArray = useAttractions()
    
    const currentAttraction = attractionsArray.find(attractionObj => attractionObj.id === e.detail.attractionId)
      contentTarget.innerHTML += `
        <h3>${currentAttraction.name}</h3>
      `
      workingItinerariesArray.push({
        id:currentAttraction.id,
        type:"attraction"
      })
      console.log(workingItinerariesArray)
    }
    //ends if
  })//ends eventHub
  eventHub.addEventListener("eateryAdded", e=>{
    console.log("hi")
    if (e.detail.eateryId !==0) {
      const eateriesArray=useEateries()
      
      const currentEatery=eateriesArray.find(eateryObj => eateryObj.id=== e.detail.eateryId)
      contentTarget.innerHTML+=
      `
        <h3>${currentEatery.businessName}</h3>
      `
      workingItinerariesArray.push({
        id:currentEatery.id,
        type:"eatery"
      })
    }

  })


} //ends export

