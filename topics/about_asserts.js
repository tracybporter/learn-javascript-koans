
module("About Asserts (topics/about_asserts.js)");

test("ok assertTrue", function () {
    ok(true === true, 'true is true');
});

test("not ok", function () {
    ok(false === false, 'false is false');
});

test("assert equal", function () {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
});
