import keys from "../Settings.js"

export const dispatchDirectionsProvider = () => {
    let locations = []
    const getLocation = (place, listOrder) => {
        return fetch(`https://graphhopper.com/api/1/geocode?q=${place}
        &limit=10&key=${keys.graphhopperKey}&provider=nominatim`)
            .then(response => response.json())
            .then(parsedResponse => {
                console.log("parsedResponse: ", parsedResponse.hits[0], "place: ", place)
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
            console.log("test")
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
    return Promise.all(chain)
}

getDirections(["Nashville, TN", "Los Angeles, CA", "Huntsville, AL", "Anchorage, AK"]).then(() => {
    sortLocations();
    console.log("sorted locations: ", locations);
});
}