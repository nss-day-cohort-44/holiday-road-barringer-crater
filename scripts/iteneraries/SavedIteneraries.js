import { getItineraries, useItineraries } from "./itineraryDataProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"
import { getEateries, useEateries } from "../eateries/EateryProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"

const contentContainer = document.querySelector(".savedItineraries")

// Takes an object and makes it html readable
const render = (itineraryObj) => {
    contentContainer.innerHTML += `
    <div class="savedItineraryCard">
    <h2>${itineraryObj.park.fullName}</h2>
    <p>${itineraryObj.attraction.name}</p>
    <p>${itineraryObj.eatery.businessName}</p>
    </div>
    `
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
            // console.log("parks", parksArr)
            const savedItineraries = useItineraries()
            console.log("itineraries: ", savedItineraries)
            const attractionsArr = useAttractions()
            // console.log("attractions", attractionsArr)
            const eateryArr = useEateries()
            // console.log("eateries: ", eateryArr)
            for (const itinerary of savedItineraries) {
                ObjectsArr.push({
                    park: parksArr.find(parkObj => parkObj.id === itinerary.parkId),
                    attraction: attractionsArr.find(attractionObj => attractionObj.id === parseInt(itinerary.attractionIds)),
                    eatery: eateryArr.find(eateryObj => eateryObj.id === parseInt(itinerary.eateryId))
                })
            }
            // console.log("new objects: ", ObjectsArr)
            for (const itinerary of ObjectsArr) {
                render(itinerary)
            }
        })

}