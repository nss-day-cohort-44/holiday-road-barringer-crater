import { useItineraries } from "../iteneraries/itineraryDataProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { getEvents, useEvents } from "./EventDataProvider.js"
export const dispatchEventList = () => {
    const eventHub = document.querySelector(".container")

    eventHub.addEventListener("eventDetailsRequested", event => {
        // console.log("I'm listening")
        // console.log("event.details", event.detail)
        let itinerary = useItineraries().find(i => i.id === parseInt(event.detail.itinId))
        console.log("itinerary Found!", itinerary)
        let park = useParks().find(p => p.id === itinerary.parkId)
        // console.log("park found!", park)
        // console.log("park code:", park.parkCode)
        getEvents(park.parkCode)
        .then(() => {
            console.log("here are the events:", useEvents())
            const contentContainer = document.querySelector(".savedItineraries__events")
        })
    })
}