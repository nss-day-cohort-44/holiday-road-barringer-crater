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
        console.log("park found!", park)
        console.log("park code:", park.parkCode)
        getEvents(park.parkCode)
        .then(() => {
            const events = useEvents()
            const contentContainer = document.querySelector(".savedItineraries__events")
            if (events.length !== 0) {
            let eventHtmlString = ""
            console.log("here are the events:", events)
            for (const event of events) {
                eventHtmlString += `
                <div class="eventCard">
                <h3>Title: ${event.title}</h3>
                <p>Start date: ${event.datestart}</p>
                <p>Start time: ${event.times[0].timestart}</p>
                <p>End time: ${event.times[0].timeend}</p>
                <p>Description: ${event.description} </p>
                <p>Fee info: ${event.feeinfo}</p>
                </div>
                `
            }
            contentContainer.innerHTML = `
            <h3>Park Events:</h3>
            ${eventHtmlString}`
        } else {
            contentContainer.innerHTML = `<h3>Park Events:</h3><p>We're sorry, this location does not have scheduled events.</p>`
        }

        })
    })
}