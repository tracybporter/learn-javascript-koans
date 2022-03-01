module("About Control Structures (topics/about_control_structures.js)");

test("if", function () {
	var isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	ok(isPositive, 'what is the value of isPositive?');
});

test("for", function () {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(11 + 2 + 3, counter, 'what is the value of counter?');
});

test("for in", function () {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var propertyNames = "";
	var propertyValues = "";
	// for in enumerates the property names of an object
	for (var property_name in person) {
		propertyNames += property_name;
		propertyValues += person[property_name];
	}
	equal('nameage', propertyNames, 'what is the value of result?');
	equal('Amory Blaine102', propertyValues, 'what is the value of result?');
});

test("ternary operator", function () {
	var fruit = true ? "apple" : "rain";
	equal('apple', fruit, 'what is the value of fruit?');

	fruit = false ? "apple" : "rain";
	equal('rain', fruit, 'now what is the value of fruit?');
});

test("switch", function () {
	var result = 0;
	switch (2) {
		case 1:
			result = 101;
			break;
		case 1 + 1:
			result = 97;
			break;
	}
	equal(97, result, 'what is the value of result?');
});

test("switch default case", function () {
	var result = "Pippin";
	switch ("m") {
		case "f":
			result = "Frodo";
			break;
		case "s":
			result = "Samwise";
			break;
		default:
			result = "Merry";
			break;
	}
	equal('Merry', result, 'what is the value of result?');
});

test("null coalescing", function () {
	equal(null || "a value", 'a value', 'what is the value of result?');
	equal(false || "a value", 'a value', 'what is the value of result?');
	ok(true || "a value", 'what is the value of result?');
});
