let savedItineraries = ""

export const useItineraries = () => savedItineraries.slice()

export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedItineraries => savedItineraries = parsedItineraries)
}