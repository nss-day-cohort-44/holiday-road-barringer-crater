import {useItineraries} from "./itineraryDataProvider.js"
import {useParks} from "../parks/ParkProvider.js"
export const dispatchSavedItineraries=()=>{
const contentContainer = document.querySelector(".savedItineraries")

const render = (itineraryObj) => {
    contentContainer.innerHTML += `
    <h2>${itineraryObj.fullName}</h2>
    `
}
}
export const SavedItinerariesList = () => {
    const parksArr = useParks()

}
