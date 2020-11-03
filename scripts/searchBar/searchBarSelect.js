import { useAttractions } from "../attractions/AttractionProvider.js";
import { useItineraries } from "../iteneraries/itineraryDataProvider.js";

export const dispatchSearchBarSelect=()=>{
    const contentTarget=document.querySelector(".searchBar__output")
    document.querySelector("#searchBar")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const searchFunction=()=>{
            const attractionArray = useAttractions()    
            let foundItem = attractionArray.filter(searchedItem => searchedItem.description.includes(keyPressEvent.target.value))
            return foundItem
            }

            let listOfFoundItem=searchFunction()
            console.log(listOfFoundItem)
            let foundItemHTML=""
            for (const item of listOfFoundItem){
                foundItemHTML+=render(item)
            }
            contentTarget.innerHTML =foundItemHTML


            
        }
    });
   
}

const render=(foundObj)=>{

    return `<p>${foundObj.name}</p>`
}