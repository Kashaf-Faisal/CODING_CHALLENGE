// DAY 4:START CODING
// QUESTION12:Greetings:Use the array from Exercise 11.Instead of just printing each person's name, print a message to them.The message should be the same for each person, personalized with their names.
var names = ["Talha", "Fabiha", "Meerab"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some TypeScript today?"));
}
