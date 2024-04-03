// DAY 4:START CODING
// QUESTION12:Greetings:Use the array from Exercise 11.Instead of just printing each person's name, print a message to them.The message should be the same for each person, personalized with their names.



let names: string[] = ["Talha", "Fabiha", "Meerab"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}