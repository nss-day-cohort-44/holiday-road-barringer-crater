const eventHub = document.querySelector(".container");

export const checkItenerary = (ev) => {

    const eateries = document.querySelector("#tripDropDown__eatery").value;
    const attractions = document.querySelector("#tripDropDown__attractions").value;
    const parks = document.querySelector("#tripDropDown__parks").value;
    let e;

    if(parks !== "0" && eateries !== "0" && attractions !== "0") {
        e = new CustomEvent("itenerarySelected");
    } else {
        e = new CustomEvent("iteneraryUnselected");
    }
    eventHub.dispatchEvent(e);
}
export const dispatchItineraryListener=()=>{
eventHub.addEventListener("chosenPark", checkItenerary);
eventHub.addEventListener("chosenEatery", checkItenerary);
eventHub.addEventListener("chosenAttraction", checkItenerary);

eventHub.addEventListener("itenerarySelected", e => {
    document.querySelector("#itinerarySave").className = "buttonSelectable";
});

eventHub.addEventListener("iteneraryUnselected", e => {
    document.querySelector("#itinerarySave").className = "buttonUnselectable";
}) 
}