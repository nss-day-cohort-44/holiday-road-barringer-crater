
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
import { dispatchWorkingItinerary } from "./iteneraries/workingItinerary.js"
import { getEvents, useEvents } from "./events/EventDataProvider.js";
// import { dispatchDirectionsProvider } from "./directions/DirectionProvider.js"
 import { dispatchDirectionsProvider } from "./directions/DirectionProvider.js"
import { dispatchEventList } from "./events/eventList.js";

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
dispatchWorkingItinerary()


dispatchDirectionsProvider();
dispatchEventList()