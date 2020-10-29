import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("eateryDetailsRequested", event => {
    const id = event.detail.eateryId

const detailContainer = document.querySelector("#eatery--details")
    
    const chosenEatery = useEateries().find(eateryObj => eateryObj.id === event.detail.eateryId)
    
    detailContainer.innerHTML = `${chosenEatery.description}
    <button id="hideEateryDetails">Hide Details</button>`
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "hideEateryDetails") {
            const eateryDetailsHidden = new CustomEvent("hideEateryDetails", {
                detail: {
                    eateryId: id
                }
            })
            eventHub.dispatchEvent(eateryDetailsHidden)
        }
    })
})

eventHub.addEventListener("hideEateryDetails", clickEvent => { 
       const hideDetailEvent = document.querySelector("#eatery--details")
        hideDetailEvent.innerHTML = `<div class="details" id="eatery--details"><button id="eateryDetails--${clickEvent.detail.eateryId}">Details</button></div>`
    
})