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
 
//EateriesSelect()
getEateries()