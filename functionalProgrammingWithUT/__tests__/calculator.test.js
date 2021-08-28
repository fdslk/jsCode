const {add, multiply } = require("../calculator");

describe('calculator tests', () => {

    test("add 1 + 2 equal to 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    test("multiply 2 * 3 equal to 6", () => {
        expect(multiply(2, 3)).toBe(6);
    })
});