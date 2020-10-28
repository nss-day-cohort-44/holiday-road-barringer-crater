import keys from "../Settings.js";
let weather = [];

export const useWeather = () => {
    let newWeather=weather.list.slice()
    // return every  8th object. 5,13,21,29,
    console.log("temperature",newWeather[5].main)
    console.log("weather conditions",newWeather[5].weather[0].main)
    const returnUsableWeather=(fullArray)=>{
        let newArrayOfWeather=[]
        for (let i=5; i<fullArray.length;i+8){
            console.log(i)
        }

    }
    returnUsableWeather(newWeather)
    return newWeather;
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse;
        console.log(weather)
    });
}