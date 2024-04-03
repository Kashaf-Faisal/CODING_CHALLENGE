// DAY 5 : START CODING
// QUESTION 13:Your own array:Think of your favourite mode of transportation,such as a motorcycle or a car,and make a list that stores several examples.Use your list to print a series of statements about these items such as"I would like to own a Honda motorcycle."
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transports) {
    console.log("I would like to own a ".concat(transports, "."));
});
