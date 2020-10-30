import { getItineraries, useItineraries } from "./itineraryDataProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"
import { getEateries, useEateries } from "../eateries/EateryProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"
//export const dispatchSavedItineraries=()=>{

// Takes an object and makes it html readable
const render = (itineraryArr) => {
    const contentContainer = document.querySelector(".savedItineraries")

    let containerHTML = "";
    for (const itinerary of itineraryArr) {
        containerHTML += `
        <div class="savedItineraryCard">
        <h2>${itinerary.park.fullName}</h2>
        <p>${itinerary.attraction.name}</p>
        <p>${itinerary.eatery.businessName}</p>
        </div>
        `
    }
    contentContainer.innerHTML = containerHTML;
}

// Takes the objects from the local api and converts them into an object with names instead of just id numbers

export const readableObjects = () => {
    getParks()
        .then(getItineraries)
        .then(getEateries)
        .then(getAttractions)
        .then(() => {
            const ObjectsArr = []
            const parksArr = useParks()
            console.log("parks", parksArr)
            const savedItineraries = useItineraries()
            console.log("itineraries: ", savedItineraries)
            const attractionsArr = useAttractions()
            console.log("attractions", attractionsArr)
            const eateryArr = useEateries()
            const attractionsChosen = () => {
                for (const itinerary of savedItineraries) {
                   const attractions = itinerary.filter(io => io.type === "attraction")
                   return attractions
                }
            }
            const chosenAttraction = attractionsChosen()
            console.log("chosen attraction: ", chosenAttraction)
            // console.log("eateries: ", eateryArr)
            // for (const itinerary of savedItineraries) {
            //     ObjectsArr.push({
            //         park: parksArr.find(parkObj => parkObj.id === itinerary.parkId),
            //         attraction: attractionsArr.find(attractionObj => attractionObj.id === parseInt(itinerary.attractionIds)),
            //         eatery: eateryArr.find(eateryObj => eateryObj.id === parseInt(itinerary.eateryId))
            //     })
            // }
            render(ObjectsArr)
        })
}