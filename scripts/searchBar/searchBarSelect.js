import { useAttractions } from "../attractions/AttractionProvider.js";
import { useItineraries } from "../iteneraries/itineraryDataProvider.js";

export const dispatchSearchBarSelect=()=>{
    const contentTarget=document.querySelector(".searchBar__output")
    document.querySelector("#searchBar")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const searchFunction=()=>{
            const attractionArray = useAttractions()    
            let foundItem = attractionArray.find(searchedItem => searchedItem.description.includes(keyPressEvent.target.value))
            return foundItem
            }

            let foundItemToHTML=searchFunction()
            
            contentTarget.innerHTML = `

                <p>${foundItemToHTML.name}</p>
                
            `;
        }
    });
   
}
