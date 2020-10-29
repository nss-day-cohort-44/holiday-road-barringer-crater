import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from '../parks/ParkProvider.js'
const eventHub = document.querySelector(".container")

eventHub.addEventListener("chosenPark", e => {

    const park = useParks().find(park => park.id === e.detail.chosenPark).addresses[0].city
    getWeather(park)
        .then(() => {
            const weatherPatterns = useWeather()
            console.log(weatherPatterns)
            const contentTarget = document.querySelector(".displayWeather")
            console.log("here is the content Target", contentTarget)
            let weatherHTMLString = ""

            const weatherArray = useWeather()
            for (const weather of weatherArray) {
                weatherHTMLString += render(weather)
            }
            console.log(weatherHTMLString)
            contentTarget.innerHTML = `<p>5 Day Forecast</p>${weatherHTMLString}`
        })



})

const render = (weatherObj) => {
    return `
    <p>Temp:${weatherObj.temperature}°      Weather:${weatherObj.weather}</p>
    
    `

}
