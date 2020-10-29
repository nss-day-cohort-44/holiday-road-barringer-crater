import { useWeather } from "./WeatherProvider.js"

const eventHub =document.querySelector(".container")

eventHub.addEventListener("chosenPark",e=>{
    const contentTarget=document.querySelector("#weatherDisplay") 
    const weatherArray=useWeather()
    
    

})

const render=(arrayOfWeather)=>{
    return `  `

}
