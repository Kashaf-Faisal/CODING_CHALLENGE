"use strict";
// DAY 6: START CODING
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests = ["Talha", "Abdullah", "Omesha", "Hiba"];
// guests.forEach (guest => {
// console.log(`Dear ${guest},would you like to join me for dinner?`)
// });
console.log("NEW GUESTS");
let unableTOAttend = "Abdullah";
// replace the guest
let newGuest = "Aliza";
guests[0] = newGuest;
// New invitation
guests.forEach((guest) => {
    console.log(`Dear ${guest},would you like to join me for dinner?`);
});
console.log("Good News!, we find big table so we are inviting 3 more guests");
// unShift :Inserts new elemnts at start of an array
guests.unshift("Meerab");
// Splice:Removes elements from an array and,if necessary,inserts new elements in their place,returning the deleted element
guests.splice(2, 0, "Fabiha"),
    // push: append new element to the end of an array
    guests.push("Nadra");
guests.forEach((guest) => {
    console.log(`Dear ${guest},would you like to join me for dinner?`);
});
