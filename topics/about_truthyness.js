
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function () {
    var oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, '1 is truthy');
    ok(1 ? true : false, '1 is truthy');
    ok(9 ? true : false, '9 is truthy');
});

test("truthyness of negative numbers", function () {
    ok(-1 ? true : false, '-1 is truthy');
});

test("truthyness of strings", function () {
    ok('a' ? true : false, '-1 is truthy');
});

test("truthyness of zero", function () {
    ok(!(0 ? true : false), '0 is NOT truthy?');
});

test("truthyness of null", function () {
    ok(!(null ? true : false), 'whew null is NOT truthy?');
});