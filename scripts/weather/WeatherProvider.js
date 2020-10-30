import { useParks } from "../parks/ParkProvider.js";
import keys from "../Settings.js";
let weather = [];
const eventHub=document.querySelector(".container")

    


export const useWeather = () => {
    let newWeather=weather.list.slice()
    // return every  8th object. 5,13,21,29,
    // this takes in the crazy amount of data that the weather API has and distills it into temperature and rain at noon each day. 
    const returnUsableWeather=(fullArray)=>{
        let newArrayOfWeather=[]
        for (let i=5; i<fullArray.length;i+=8){
            let pushThis={
                // gets the temperature in F now
                temperature:((Math.floor(fullArray[i].main.temp-273.15))*(9/5))+32,
                weather:fullArray[i].weather[0].main
            }
            newArrayOfWeather.push(pushThis)
            
        }
        return newArrayOfWeather
    }
    return returnUsableWeather(newWeather);
}



export const getWeather = (zipcode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${zipcode}&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse;
    });
}

// array.address.city

