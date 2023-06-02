const { getTicketByName } = require ("../src/tickets.js")
const { calculateTotalFromTicketNames } = require ("../src/tickets.js")
const tickets= require("../data/tickets.js")
    

describe ("getTicketByName()", () => {
    it("should return the ticket object when given the name",() => {
        const name = "Adult Matinee";
        const actual = getTicketByName(tickets, name);
        const expected = {
            id: "6ha0u__54",
            name: "Adult Matinee",
            priceInCents:949,
        };
      expect (actual) .toEqual(expected)
})

    it("should return null if no object", () => {
        const name = "invalidID";
        const actual = getTicketByName(tickets, name);
        const expected = null;
        expect (actual) .toEqual(expected)
    })
});

describe("calculateTotalFromTicketNames()", () => {
    it("should calculate the total value of all tickets included in the 'names' array", () => {
        const name = ["Senior Matinee", "Adult Regular"];
        const total = calculateTotalFromTicketNames(tickets, name); 
        expect(total).toBe(2208)
    })
    it("should return 0 if no concessions are found", () => {
        const name = ["non", "existant"];
        const total = calculateTotalFromTicketNames(tickets, name); 
        expect(total).toBe(0)
    })
})