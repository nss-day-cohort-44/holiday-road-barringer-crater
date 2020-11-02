import { useAttractions } from "../attractions/AttractionProvider.js";
import { useItineraries } from "../iteneraries/itineraryDataProvider.js";

export const dispatchSearchBarSelect=()=>{
    const contentTarget=document.querySelector(".searchBar__output")
    document.querySelector("#searchBar")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
           const itineraryArray = useAttractions()
            console.log(itineraryArray)
            const foundObject = itineraryArray.find(searchedItem => searchedItem.name.includes(keyPressEvent.target.value))

            contentTarget.innerHTML = `

                <p>${foundObject.name}</p>
                
            `;
        }
    });
   


}
