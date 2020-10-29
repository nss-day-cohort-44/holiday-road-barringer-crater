
import { homePageList } from "./RenderHomePage.js";
import {dispatchAttractionSelect} from './attractions/AttractionsSelect.js'
import {dispatchAttractionList} from './attractions/AttractionsList.js'
import {dispatchAttractionDetail} from './attractions/AttractionsDetail.js'
import {dispatchEatariesDetail} from './eateries/EateriesDetail.js'
import { dispatchEatariesSelect } from "./eateries/EateriesSelect.js";
import { dispatchEatariesList } from "./eateries/EateriesList.js";
import { dispatchParkDetail } from "./parks/ParkDetail.js";
import { dispatchParkList } from "./parks/ParkList.js";
import { dispatchParkSelect } from "./parks/ParkSelect.js";
//import { dispatchSavedItineraries } from "./iteneraries/SavedIteneraries.js";
import { dispatchWeather } from "./weather/Weather.js";
import {  dispatchItineraryListener } from "./iteneraries/itineraryListener.js";
import "./iteneraries/SavedIteneraries.js"
import { readableObjects } from "./iteneraries/SavedIteneraries.js";

homePageList()
dispatchAttractionSelect()
dispatchParkSelect()
dispatchEatariesSelect()

dispatchAttractionList()
dispatchEatariesList()
dispatchParkList()


dispatchAttractionDetail()
dispatchEatariesDetail()
dispatchParkDetail()

dispatchWeather()
//dispatchSavedItineraries()
dispatchItineraryListener()
readableObjects();
// import { getParks } from "./parks/ParkProvider.js";
// import "./parks/ParkSelect.js";
// import "./parks/ParkList.js";
// import "./parks/ParkDetail.js";
// import "./attractions/AttractionsSelect.js"
// import { getAttractions } from "./attractions/AttractionProvider.js";
// import "./attractions/AttractionsList.js"
// import "./attractions/AttractionsDetail.js"
// getParks();
// getAttractions()
// console.log("Hey good lookin'")


// import { getEateries } from "./eateries/EateryProvider.js"
// import "./eateries/EateriesSelect.js";
// import "./weather/WeatherProvider.js";
// import "./eateries/EateriesSelect.js"
// import "./eateries/EateriesList.js"
// import { getItineraries, useItineraries } from "./iteneraries/itineraryDataProvider.js";
// import "./eateries/EateriesDetail.js"
// getEateries()
