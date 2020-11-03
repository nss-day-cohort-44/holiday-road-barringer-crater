import {
    getItineraries, useItinerariesAttractions, useItinerariesEateries,
    getItinerariesEateries, getItinerariesAttractions, useItineraries
} from "./itineraryDataProvider.js"
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
        <h3>Attractions:</h3>
        ${attractionsString}
        <h3>Eateries:</h3>
        ${eateriesString}
        <button id="events--${itinerary.id}">Events</button>
        <button id="directions--${itinerary.id}">Directions</button>
        </div>
        `
    }
    contentContainer.innerHTML = containerHTML;
}

export const readableObjects = () => {

    let itinArr = [];

    getItineraries()
        .then(getEateries)
        .then(getAttractions)
        .then(getParks)
        .then(getItinerariesEateries)
        .then(getItinerariesAttractions)
        .then(() => {
            for (const itin of useItineraries()) {
                let eateries = [];
                let eateriesArr = [];
                let attractions = [];
                let attractionsArr = [];
                let park = useParks().find(park => park.id === itin.parkId);
                eateriesArr = useItinerariesEateries().filter(eatery => eatery.itineraryId === itin.id);
                for (const eatery of eateriesArr) {
                    eateries.push(useEateries().find(obj => obj.id === eatery.eateryId));
                }
                attractionsArr = useItinerariesAttractions().filter(
                    attraction => attraction.itineraryId === itin.id);
                for (const attraction of attractionsArr) {
                    attractions.push(useAttractions().find(obj => obj.id == attraction.attractionId))
                }
                const itinObj =
                {
                    attractions,
                    eateries,
                    park
                }
                itinArr.push(itinObj);
            }
            render(itinArr);
        })
}

// Takes the objects from the local api and converts them into an object with names instead of just id numbers

/*export const readableObjects = () => {
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
                // console.log("selected attractions", selectedAttractions)
                // console.log("T or F", Array.isArray(selectedAttractions))
                for (const attraction of selectedAttractions) {
                    attractionObjects.push(attractionsArr.find(ao => ao.id === parseInt(attraction.id)))
                }

                // console.log("attractionObjects: ", attractionObjects)
                const selectedEateries = savedItinerary.itenerary.filter(eatery => eatery.type === "eatery")
                // console.log("eateries selected", selectedEateries)
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
}*/
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  
    if (clickEvent.target.id.startsWith("directions--")) {
       console.log("I clicked button", clickEvent)
       
       //empty array, find function from useEateries
       //pul out form that city, statecode
       
     }
   
   })