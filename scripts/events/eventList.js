import { useItineraries } from "../iteneraries/itineraryDataProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { getEvents, useEvents } from "./EventDataProvider.js"
export const dispatchEventList = () => {
    const eventHub = document.querySelector(".container")

    eventHub.addEventListener("eventDetailsRequested", event => {
        // Find the specific itinerary in the json api
        let itinerary = useItineraries().find(i => i.id === parseInt(event.detail.itinId))
        // Find the matching park from the nps api
        let park = useParks().find(p => p.id === itinerary.parkId)
        // call the getevents function from event provider and pass the park code from the chosen park as an argument
        getEvents(park.parkCode)
        .then(() => {
            const events = useEvents()
            const contentContainer = document.querySelector(".savedItineraries__events")
            // If there ARE events at the selected location, render the following to the DOM
            if (events.length !== 0) {
            let eventHtmlString = ""
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
            // if there are NO events at the selected park, display the following message
        } else {
            contentContainer.innerHTML = `<h3>Park Events:</h3><p>We're sorry, this location does not have scheduled events.</p>`
        }

        })
    })
}