import { getParks } from "./parks/ParkProvider.js";
import "./parks/ParkList.js"
import "./attractions/AttractionsSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js";
import "./attractions/AttractionsList.js"
getParks();
getAttractions()
console.log("Hey good lookin'")
