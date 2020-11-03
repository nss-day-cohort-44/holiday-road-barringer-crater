import {
    getItineraries, useItinerariesAttractions, useItinerariesEateries,
    getItinerariesEateries, getItinerariesAttractions, useItineraries
} from "./itineraryDataProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"
import { getEateries, useEateries } from "../eateries/EateryProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"
import { getDirections } from "../directions/DirectionProvider.js"

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
                    id: itin.id,
                    attractions,
                    eateries,
                    park
                }
                itinArr.push(itinObj);
            }
            render(itinArr);
        })
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  
    if (clickEvent.target.id.startsWith("directions--")) {
        
        let queryString = ["Nashville, TN"]

        const [temp, id] = clickEvent.target.id.split("--");
        const itin = useItineraries().find(itinObj => itinObj.id === parseInt(id));
        const park = useParks().find(parkObj => parkObj.id === itin.parkId);
        const eateries = useItinerariesEateries().filter(eatery => eatery.itineraryId === itin.id)
        const attractions = useItinerariesEateries().filter(attraction => attraction.itineraryId === itin.id)

        eateries.forEach(eateryObj => {
            const eatery = useEateries().find(temp => temp.id === eateryObj.eateryId)
            queryString.push(`${eatery.city}, ${eatery.state}`)
        })
        attractions.forEach(attractionObj => {
            const attraction = useEateries().find(temp => temp.id === attractionObj.eateryId)
            queryString.push(`${attraction.city}, ${attraction.state}`)
        })
        
        queryString.push(`${park.addresses[0].city}, ${park.addresses[0].stateCode}`)
        getDirections(queryString);
    }   
})