module("About Arrays (topics/about_arrays.js)");

test("array literal syntax and indexing", function () {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal('cellar door', favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

test("array type", function () {
    equal('object', typeof ([]), 'what is the type of an array?');
});

test("length", function () {
    equal(3, ['a', 'b', 'c'].length, 'what is the length of the collection array?');
});

test("splice", function () {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(0, 5); //modifies original list. start index and count
    var weekend = daysOfWeek;

    deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
    deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
});

test("stack methods - pop remove last element of array", function () {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equal('second', stack.pop(), 'last in first out');
    equal('first', stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods - shift remove first element of array", function () {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal('third', queue.shift(), 'what will be shifted out first?');
    equal('first', queue.shift(), 'what will be shifted out second?');
});
