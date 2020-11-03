import keys from "../Settings.js"

let events = []

export const useEvents = () => {
    return events.data.slice()
}

export const getEvents = (parkCode) => {
    return fetch(`https://developer.nps.gov/api/v1/events?api_key=${keys.npsKey}&parkCode=${parkCode}&pageSize=2`)
    .then(res => res.json())
    .then(parsedEvents => events = parsedEvents)
}