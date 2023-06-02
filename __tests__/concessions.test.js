const { getConcessionByID } = require("../src/concessions.js")
const { calculateTotalFromIDs } = require("../src/concessions.js")
const concessions =require("../data/concessions.js")

describe("getConcessionByID()",() =>{
    it("should return the concession", () => {
        const id= "g9sZdG1hI";
        const actual = getConcessionByID(concessions, id);
        const expected = {
            id: "g9sZdG1hI",
            name: "Small Popcorn",
            priceInCents:929,
        };
        expect(actual) .toEqual(expected)
        })

    it("should return null", ()=> {
        const id= "wrongId";
        const actual= getConcessionByID(concessions, id);
        const expected = null;
        expect(actual) .toEqual(expected)
    })
});

describe("calculateTotalFromIDs()", ()=> {
    it("should calculate total value", () =>{
        const ids= ["0Qs9Yp2NL", "KzWBehRAD"];
        const actual = calculateTotalFromIDs(concessions, ids);
        const expected= 1728
        expect(actual) .toEqual(expected)
       
    })
})