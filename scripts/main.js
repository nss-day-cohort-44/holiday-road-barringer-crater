import { getParks } from "./parks/ParkProvider.js";
import "./parks/ParkSelect.js";
import "./parks/ParkList.js";
import "./parks/ParkDetail.js";
import "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js";
import "./attractions/AttractionsList.js"
import "./attractions/AttractionsDetail.js"
getParks();
getAttractions()
console.log("Hey good lookin'")


import { getEateries } from "./eateries/EateryProvider.js"
import "./eateries/EateriesSelect.js";
import { getWeather, useWeather } from "./weather/WeatherProvider.js";
import "./eateries/EateriesSelect.js"
import "./eateries/EateriesList.js"
import "./eateries/EateriesDetail.js"
 
//EateriesSelect()
getEateries()


getWeather()
    .then(() => {
      const weatherArray = useWeather()
      console.log(weatherArray)
        // console.log(weatherArray[5].main.temp)

      })