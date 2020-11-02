import { getParks, useParks } from "./ParkProvider.js";
export const dispatchParkSelect=()=>{
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#tripDropDown__parks");

getParks().then(() => {
    const parkList = useParks();
    contentTarget.innerHTML = `<option value="0">Please select a park</option> 
    ${parkList.map(park => `<option value="${park.id}">${park.fullName}</option>`).join("")}`
});

eventHub.addEventListener("change", e => {
    if(e.target.id === "tripDropDown__parks") {
        const changeEvent = new CustomEvent("chosenPark", {
            detail: {
                chosenPark: e.target.value,
                type: "park"
            }
        });
        eventHub.dispatchEvent(changeEvent);
    }
})
}

