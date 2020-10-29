const eventHub = document.querySelector(".container");

export const checkItenerary = () => {

    const eateries = document.querySelector("#tripDropDown__eatery").value;
    const attractions = document.querySelector("#tripDropDown__attractions").value;
    const parks = document.querySelector("#tripDropDown__parks").value;
    let e;
    if(parks !== "0" && eateries !== "0" && attractions !== "0") {
        e = CustomEvent("itenerarySelected");
    } else {
        e = CustomEvent("iteneraryUnselected");
    }

    eventHub.dispatchEvent(e);
}

eventHub.addEventListener("chosenPark", checkItenerary);
eventHub.addEventListener("chosenEatery", checkItenerary);
eventHub.addEventListener("chosenAttraction", checkItenerary);

