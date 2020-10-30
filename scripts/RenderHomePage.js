const contentTarget = document.querySelector(".container")
const eventHub = document.querySelector(".container")

export const homePageList = () => {
    // display the roster
    const homePageHTML = render()
    contentTarget.innerHTML = homePageHTML

}

const render = () => {
    return `
    <section class="tripDropDown">
    <select class="tripDropDown__Select" id="tripDropDown__parks">
        <option value="0">Select a national park</option>
        <option value="1">Cool park</option>
    </select>
    <select class="tripDropDown__Select" id="tripDropDown__attractions">
        <option value="0">Select an attraction</option>
        <option value="1">Cool attraction</option>
    </select>
    <select class="tripDropDown__Select" id="tripDropDown__eatery">
        <option value="0">Select an eatery</option>
        <option value="1">Cool eatery</option>
    </select>
 </section> <!--closes the trip drop down section -->
 <section class="itinerary">
     <section class="previewItinerary">
         <section class="selectedItems">
            <article class="selectedItemCard" id="parkCard">
                <h2>Name of park</h2>
                <div class="parkContent">
                </div>
            </article> <!-- closes park card-->
            <article class="selectedItemCard" id="attractionCard">
                <h2>Entertainment Selected</h2>
                <div class="attractionContent"></div>
            </article>
            </article> <!-- closes attraction card-->
            <article class="selectedItemCard" id="eateryCard">
                <h2>Eatery Selected</h2>
                <div class="eateryContent">
                </div>
            </article>
          </section> <!--closes selected Items  -->
          <div class="buttonBar">
            <button id="itinerarySave" class="buttonUnselectable">Save Itinerary</button>
            <button id="attractionAdd" class="buttonUnselectable">Add Attraction</button>
            <button id="eateryAdd" class="buttonUnselectable">Add Eatery</button>
          </div>
     </section>  <!--closes preview Itinerary -->
     <aside class="workingItineraries">
              Working itinerary will go here
     </aside>
    </section>
     <aside class="savedItineraries">
             
    </aside>
 

    `
}
export const importStuff = () => {


}