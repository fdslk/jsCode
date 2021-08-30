const { add, multiply } = require("../calculator");
const { hi } = require("../string");

describe('calculator tests', () => {

    test("add 1 + 2 equal to 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    test("multiply 2 * 3 equal to 6", () => {
        expect(multiply(2, 3)).toBe(6);
    })
});

describe('string operation tests', ()=>{
    test("get Hi Bill", () => {
        expect(hi("Bill")).toBe("Hi Bill");
    })
});