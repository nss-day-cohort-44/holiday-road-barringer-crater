import { useEateries } from "./EateryProvider.js"
export const dispatchEatariesDetail=()=>{
const eventHub = document.querySelector(".container")


eventHub.addEventListener("eateryDetailsRequested", event => {

const detailContainer = document.querySelector("#eatery--details")
    
    const chosenEatery = useEateries().find(eateryObj => eateryObj.id === event.detail.eateryId)
    
    detailContainer.innerHTML = `${chosenEatery.description}
    <button id="hideEateryDetails">Hide Details</button>`
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideEateryDetails" ) {
        const hideDetailEvent = 
        document.querySelector("#eatery--details")
        hideDetailEvent.innerHTML = ""
        // new CustomEvent("eateryHideDetailsRequested",
        // {   
        //     detail: {
        //         //why this?
        //         eateryId: id
        //     }

        // })
        // eventHub.dispatchEvent(hideDetailEvent)
    }
})
}