import { getParks, useParks } from "./ParkProvider.js";

const contentTarget = document.querySelector("body");
getParks().then(() => {
    const parkList = useParks();
    contentTarget.innerHTML = `<select>
    ${parkList.map(park => `<option>${park.fullName}</option>`)}
    </select>`
});