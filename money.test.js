"use strict";
exports.__esModule = true;
var money_1 = require("./money");
test('Dollar', function () {
    var five = new money_1["default"](5);
    var ten = five.times(2);
    expect(ten.amount).toBe(10);
    var fifteen = five.times(3);
    expect(fifteen.amount).toBe(15);
    // five is still five (immutability)
    expect(five.amount).toBe(5);
});
test('Equals', function () {
    var five = new money_1["default"](5);
    expect(five.equals(new money_1["default"](5))).toBe(true);
});
