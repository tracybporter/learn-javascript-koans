
module("About Numbers (topics/about_numbers.js)");

test("types", function () {
    var typeOfIntegers = typeof (6);
    var typeOfFloats = typeof (3.14159);
    ok(typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
    equal('number', typeOfIntegers, 'what is the javascript numeric type?');
    equal(1, 1.0, 'what is a integer number equivalent to 1.0?');
});

test("NaN", function () {
    var resultOfFailedOperations = 7 / 'apple';
    ok(isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
    equal(false, resultOfFailedOperations == NaN, 'is NaN == NaN?');
});
