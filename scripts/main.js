import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js"
console.log("hi")
getAttractions()
        .then(() => {
            const blah = useAttractions()
            console.log(blah)
        })