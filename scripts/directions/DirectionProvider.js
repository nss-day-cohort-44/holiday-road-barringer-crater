import keys from "../Settings.js"

export const dispatchDirectionsProvider = () => {
    let locations = []
    const getLocation = (place, listOrder) => {
        return fetch(`https://graphhopper.com/api/1/geocode?q=${place}
        &limit=10&key=${keys.graphhopperKey}&provider=nominatim`)
            .then(response => response.json())
            .then(parsedResponse => {
                locations.push(
                    {
                        order: listOrder,
                        loc: parsedResponse.hits[0]
                    }
                );
            });
    }

    const sortLocations = () => {
        locations.sort((elemOne, elemTwo) => {
            return elemOne.order - elemTwo.order;
        })
    }

    const getDirections = (locArray) => {
        let chain = []
        chain.push(getLocation(locArray[0], 0));
        if (locArray.length > 1) {
            for (let i = 1; i < locArray.length; i++) {
                chain.push(getLocation(locArray[i], i))
            }
        }
        Promise.all(chain).then(() => {
            sortLocations();
            let queryString = "";
            let directionsString = "";
            for (const location of locations) {
                queryString += `&point=${location.loc.point.lat},${location.loc.point.lng}`
            }
            return fetch(`https://graphhopper.com/api/1/route?key=${keys.graphhopperKey}${queryString}`)
                .then(response => response.json())
                .then(parsedResponse => {
                    for(const item of parsedResponse.paths[0].instructions) {
                        
                        const contentTarget = document.querySelector(".directionsRender")
                        contentTarget.innerHTML = `<h2>Directions</h2>
                            <p>${directionsString}</p>`
                        
                    }
                    //console.log(directionsString)
                })
        })
    }

    // getDirections(["Nashville, TN", "Los Angeles, CA", "Huntsville, AL", "Anchorage, AK"]);
}