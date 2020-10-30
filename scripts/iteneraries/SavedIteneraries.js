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
        let attractionsString = ""
        let eateriesString = ""
        for (const attractionObj of itinerary.attractions) {
            attractionsString += `<p>${attractionObj.name}</p>`
        }
        for (const eateryObj of itinerary.eateries) {
            eateriesString += `<p>${eateryObj.businessName}</p>`
        }
        containerHTML += `
        <div class="savedItineraryCard">
        <h2>${itinerary.park.fullName}</h2>
        <p>Attractions:${attractionsString}</p>
        <p>Eateries:${eateriesString}</p>
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
            // console.log("parks", parksArr)
            const savedItineraries = useItineraries()
            // console.log("itineraries: ", savedItineraries)
            const attractionsArr = useAttractions()
            // console.log("attractions", attractionsArr)
            const eateryArr = useEateries()
            // console.log("eateries: ", eateryArr)
            for (const savedItinerary of savedItineraries) {
                const attractionObjects = []
                const eateryObjects = []
                const selectedAttractions = savedItinerary.itenerary.filter(attraction => attraction.type === "attraction")
                console.log("selected attractions", selectedAttractions)
                console.log("T or F", Array.isArray(selectedAttractions))
                for (const attraction of selectedAttractions) {
                    attractionObjects.push(attractionsArr.find(ao => ao.id === parseInt(attraction.id)))
                }
                
                console.log("attractionObjects: ", attractionObjects)
                const selectedEateries = savedItinerary.itenerary.filter(eatery => eatery.type === "eatery")
                console.log("eateries selected", selectedEateries)
                for (const eatery of selectedEateries) {
                    eateryObjects.push(eateryArr.find(eateryObj => eateryObj.id === parseInt(eatery.id)))
                }
                const selectedPark = savedItinerary.itenerary.find(park => park.type === "park")
                ObjectsArr.push({
                    park: parksArr.find(parkObj => parkObj.id === selectedPark.id),
                    attractions: attractionObjects,
                    eateries: eateryObjects
                })
            }
            render(ObjectsArr)
        })
}