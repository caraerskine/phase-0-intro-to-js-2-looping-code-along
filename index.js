// // Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
//     debugger;

// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//     }
//      return gifts;

// }

// wrapGifts(gifts);

// let guest = [];

function writeCards(guest, occasion){
    let guestNames = []
    for (let i = 0; i < guest.length; i++) {
        guestNames.push(`Thank you, ${guest[i]}, for the wonderful ${occasion} gift!`);
//    debugger;
    }
    return guestNames;
}
 
writeCards(guest, occasion);


function countDown(number){
    let i = number
    while (i >= 0) 
    {console.log(i)
        i--;}
}



// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }