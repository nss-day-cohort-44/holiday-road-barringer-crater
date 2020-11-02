import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { useParks } from "../parks/ParkProvider.js"

let parkButtonClassAdded = false
let eateryButtonClassAdded = false
let attractionButtonClassAdded = false

//attractionAdded
const eventHub = document.querySelector(".container")
let workingItinerariesArray=[]

export const useWorkingIteneraries = () => workingItinerariesArray.slice();

//to put selections in working aside
export const dispatchWorkingItinerary = () => {

  const contentTarget = document.querySelector(".workingItineraries")

  eventHub.addEventListener("attractionAdded", e => {
    
    if (e.detail.attractionId !== 0) {
      const attractionsArray = useAttractions()
      attractionButtonClassAdded = true
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
    // console.log("hi")
    if (e.detail.eateryId !==0) {
      const eateriesArray=useEateries()
      eateryButtonClassAdded = true
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

  eventHub.addEventListener("ParkAdded", e=>{
  const parkContentTarget=document.querySelector(".addedParksHere")
    if (e.detail.parkId !==0) {
      const parksArray=useParks()
      parkButtonClassAdded = true
      const currentPark=parksArray.find(parkObj => parkObj.id=== e.detail.parkId)
      parkContentTarget.innerHTML=
      `
        <h3>${currentPark.name}</h3>
      `
      // this makes sure that only one park can be on the list
      for (let i=0;i<workingItinerariesArray.length;i++){
        if (workingItinerariesArray[i].type==="park"){
          workingItinerariesArray.splice([i],1)
        }
      }
      workingItinerariesArray.push({
        id:currentPark.id,
        type:"park"
      })
      console.log(workingItinerariesArray)
    }
  })
} //ends export

export const checkWorkingItin = () => {
  console.log(parkButtonClassAdded, eateryButtonClassAdded, attractionButtonClassAdded)
  if (parkButtonClassAdded && eateryButtonClassAdded && attractionButtonClassAdded) {
    return true
  } else {
    return false
  }
}