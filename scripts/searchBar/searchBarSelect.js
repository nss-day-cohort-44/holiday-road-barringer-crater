import { useAttractions } from "../attractions/AttractionProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useParks } from "../parks/ParkProvider.js"
import { useItineraries } from "../iteneraries/itineraryDataProvider.js";

export const dispatchSearchBarSelect = () => {

    const searchFunction = (keyPressEvent) => {
        let foundItems = [];
        foundItems = foundItems.concat(useEateries().filter(searchedItem =>
            searchedItem.description.includes(keyPressEvent.target.value)));
        foundItems.forEach(item => {
            item.name = item.businessName;
        })
        foundItems = foundItems.concat(useAttractions().filter(searchedItem =>
            searchedItem.description.includes(keyPressEvent.target.value)));
        foundItems = foundItems.concat(useParks().filter(searchedItem =>
            searchedItem.description.includes(keyPressEvent.target.value)));
        return foundItems;
    }

    const contentTarget = document.querySelector(".searchBar__output")
    document.querySelector("#searchBar").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            let listOfFoundItem = searchFunction(keyPressEvent)
            console.log(listOfFoundItem)
            let foundItemHTML = ""
            for (const item of listOfFoundItem) {
                foundItemHTML += render(item)
            }
            contentTarget.innerHTML = foundItemHTML
        }
    });
}

const render = (foundObj) => {
    return `<p>${foundObj.name}</p>`
}