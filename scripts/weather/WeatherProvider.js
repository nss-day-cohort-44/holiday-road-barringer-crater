import keys from "../Settings.js";
let weather = [];

export const useWeather = () => {
    return weather.list.slice();
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        weather = parsedResponse;
        console.log(weather)
    });
}