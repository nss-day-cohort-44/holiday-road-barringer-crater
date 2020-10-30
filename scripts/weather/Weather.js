import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from '../parks/ParkProvider.js'
import {weatherIconArray} from './WeatherProvider.js'
export const dispatchWeather = () => {
    const eventHub = document.querySelector(".container")

    eventHub.addEventListener("chosenPark", e => {
        if (e.detail.chosenPark !== "0") {
            // finds the park city 
            const park = useParks().find(park => park.id === e.detail.chosenPark).addresses[0].postalCode
            getWeather(park)
                .then(() => {
                    // find the place to display the weather
                    const contentTarget = document.querySelector(".displayWeather")
                    let weatherHTMLString = ""
                    // gets the useWeather function
                    const weatherArray = useWeather()
                    for (const weather of weatherArray) {
                        // console.log(weather)
                        weatherHTMLString += render(weather)
                    }
                    // console.log(weatherHTMLString)
                    contentTarget.innerHTML = `<p>5 Day Forecast</p>${weatherHTMLString}`
                })
        }
    })

    


    const render = (weatherObj) => {
        let weatherHTML = ""
        for (let i = 0; i < weatherIconArray.length; i++) {
            // console.log("weather Object",weatherObj.weather)
            // console.log("Weather Icon",weatherIconArray[i].type)
            let roundedTemperature=Math.floor(weatherObj.temperature)
            if (weatherObj.weather === weatherIconArray[i].type) {
                // console.log("match")
                weatherHTML = `<p>Temp:${roundedTemperature}° Condition: <img class=weatherPicture src=${weatherIconArray[i].image}></p>`
            }
        }
        return weatherHTML
    

    }
}