import { getParks, useParks } from "./ParkProvider.js";

const contentTarget = document.querySelector("#tripDropDown__parks");
getParks().then(() => {
    const parkList = useParks();
    contentTarget.innerHTML = parkList.map(park => `<option>${park.fullName}</option>`)
});