import { useParks } from "./ParkProvider.js"
export const dispatchParkList=()=>{

const eventHub = document.querySelector(".container");

eventHub.addEventListener("chosenPark", e => {
    if (e.detail.chosenPark !== "0") {
        const headerTarget = document.querySelector("#parkCard h2");
        const detailTarget = document.querySelector(".parkContent");

    headerTarget.innerHTML = useParks().find(park => park.id === e.detail.chosenPark).fullName;
    detailTarget.innerHTML = `<div class=displayWeather>Weather goes here</div>
    <div class="details" id="parkDetails">
    <button id="parkDetails--${e.detail.chosenPark}">Details</button>
    </div>`;
    document.querySelector("#parkAdd").className = "buttonSelectable"
    }else {
        document.querySelector("#parkAdd").className = "buttonUnselectable"}
    
});

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("parkDetails--")) {
        const [temp, id] = e.target.id.split("--");
        const detailEvent = new CustomEvent("parkDetailsRequested", {
            detail: {
                parkId: id
            }
        });
        eventHub.dispatchEvent(detailEvent);
    } else if(e.target.id === "parkAdd") {
        //console.log("it was clicked")
        const parkId = document.querySelector("#tripDropDown__parks").value 
        const addParkBtnClicked = new CustomEvent("ParkAdded", {
            detail: {
                parkId: parkId,
                type: "park"
            }
        })
        // console.log("Does this work?",addParkBtnClicked)
        eventHub.dispatchEvent(addParkBtnClicked)
    }
});
}