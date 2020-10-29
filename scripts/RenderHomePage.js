const contentTarget=document.querySelector(".container")
const eventHub=document.querySelector(".container")

export const homePageList=()=>{
    // display the roster
    const homePageHTML=render()
    contentTarget.innerHTML=homePageHTML  
    
}

const render=()=>{
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
            </article> <!-- closes attraction card-->
            <article class="selectedItemCard" id="eateryCard">
                <h2>Eatery Selected</h2>
                <div class="eateryContent">
                </div>
            </article>
          </section> <!--closes selected Items  -->
          <button class="itinerarySave">Save Itinerary</button>
     </section>  <!--closes preview Itinerary -->
     <aside class="savedItineraries">
              Saved itineraries will go here
    </aside>
 </section>

    `
}
export const importStuff=()=>{
    

}