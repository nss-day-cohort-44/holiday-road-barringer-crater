import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from '../parks/ParkProvider.js'

export const dispatchWeather=()=>{
const eventHub = document.querySelector(".container")

eventHub.addEventListener("chosenPark", e => {
// finds the park city 
    const park = useParks().find(park => park.id === e.detail.chosenPark).addresses[0].city
    getWeather(park)
        .then(() => {
            // find the place to display the weather
            const contentTarget = document.querySelector(".displayWeather")
            let weatherHTMLString = ""
            // gets the useWeather function
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
}