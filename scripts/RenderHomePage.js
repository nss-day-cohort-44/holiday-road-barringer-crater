const contentTarget = document.querySelector(".container")
const eventHub = document.querySelector(".container")

export const homePageList = () => {
    // display the roster
    const homePageHTML = render()
    contentTarget.innerHTML = homePageHTML

}

const render = () => {
    return `
    <section class="tripDropDown" id="planAnchor">
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
            <button id="parkAdd" class="buttonUnselectable">Add Park</button>
            
            <button id="attractionAdd" class="buttonUnselectable">Add Attraction</button>
            <button id="eateryAdd" class="buttonUnselectable">Add Eatery</button>
          </div>
     </section>  <!--closes preview Itinerary -->
     <aside >
         <h2>Your Plans</h2>
         <div class="addedParksHere">
        
         </div>
        <div class="workingItineraries">
        
        </div>
        <div>            
        <button id="itinerarySave" class="buttonUnselectable">Save Itinerary</button>
        </div>
     </aside>
    </section>
    
    <aside class="savedItineraries" id="savedAnchor">
         
    </aside>

    <section class=searchBar>
    <h3>Find Your Own Way<h3>
    <p>Search any of our databases to find what you are looking for</p>
    <input type="text" placeholder="search" id=searchBar>
    <div class=searchBar__output> Output will be here </div>

    </section>
    <footer>© Barringer Crater, Inc. All rights reserved.</footer>


    `
}
export const importStuff = () => {


}