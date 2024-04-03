// DAY 5: START CODING
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guests = ["Talha", "Abdullah", "Omesha", "Hiba"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});
console.log("NEW GUESTS");
var unableTOAttend = "Abdullah";
// replace the guest
var newGuest = "Aliza";
guests[0] = newGuest;
// New invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});
