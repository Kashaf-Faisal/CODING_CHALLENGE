// DAY 5: START CODING
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guests : string[] = ["Talha", "Abdullah", "Omesha","Hiba"]
guests.forEach (guest => {
    console.log(`Dear ${guest},would you like to join me for dinner?`)
});
console.log ("NEW GUESTS")
let unableTOAttend : string = "Abdullah"
// replace the guest
let newGuest : string = "Aliza"
guests[0] = newGuest
// New invitation
guests.forEach (guest => {
    console.log(`Dear ${guest},would you like to join me for dinner?`)
});
