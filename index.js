// Code your solutions in this file
const names=['Guadalupe','Ollie','Aki'];
const event = "surprise";
 function writeCards( names, event ) {
  let myCards = []
  for ( let i = 0; i < names.length; i++ ) {
    myCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return myCards
}

function countDown(countNumber){
    while(countNumber >= 0) {
        console.log(countNumber);
        countNumber--;
    }
}
console.log(countDown(10))