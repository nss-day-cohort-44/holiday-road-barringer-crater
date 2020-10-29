import { getItineraries, useItineraries } from "./itineraryDataProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"
import { getEateries, useEateries } from "../eateries/EateryProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"

const contentContainer = document.querySelector(".savedItineraries")

const render = (itineraryObj) => {
    contentContainer.innerHTML += `
    <div class="savedItineraryCard">
    <h2>${itineraryObj.park.fullName}</h2>
    <p>${itineraryObj.attraction.name}</p>
    <p>${itineraryObj.eatery.businessName}</p>
    </div>
    `
}

export const readableObjects = () => {
    getParks()
        .then(getItineraries)
        .then(getEateries)
        .then(getAttractions)
        .then(() => {
            let ObjectsArr = []
            const parksArr = useParks()
            // console.log("parks", parksArr)
            const savedItineraries = useItineraries()
            // console.log("itineraries: ", savedItineraries)
            const attractionsArr = useAttractions()
            // console.log("attractions", attractionsArr)
            const eateryArr = useEateries()
            // console.log("eateries: ", eateryArr)
            for (const itinerary of savedItineraries) {
                ObjectsArr.push({
                    Park: parksArr.find(parkObj => parkObj.id === itinerary.parkId),
                    attraction: attractionsArr.find(attractionObj => attractionObj.id === parseInt(itinerary.attractionIds)),
                    eatery: eateryArr.find(eateryObj => eateryObj.id === parseInt(itinerary.eateryId))
                })
            }
            console.log("new object: ", ObjectsArr)
            return ObjectsArr
        })

}



export const SavedItinerariesList = () => {
    const ItinerariesArray = readableObjects()
    console.log ("ItinerariesArray", ItinerariesArray)
    for (const itinerary of ItinerariesArray) {
        render(itinerary)
    }
}
// export const SavedItinerariesList = () => {
//     getParks()
//         .then(getItineraries)
//         .then(() => {
//             // let savedItinerariesString = ""
//             const parksArr = useParks()
//             const savedItineraries = useItineraries()
//             const selectedParks = savedItineraries.map(itinObj => {
//                 return parksArr.find(parkObj => parkObj.id === itinObj.parkId)
//             })
//             for (const itin of selectedParks) {
//                 render(itin)
//             }
//         })
// }