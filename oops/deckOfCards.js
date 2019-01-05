// class Deck {
//     constructor() {
//       this.deck = [];
  
//       const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//       const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
//       for (let suit in suits) {
//         for (let value in values) {
//           this.deck.push(`${values[value]} of ${suits[suit]}`);
//         }
//       }
//     }

//     shuffle(){
//       const { deck } = this;
//       let m = deck.length, i;
//      // for(var i=0;i<9;i++){
//       while(m){
//         i = Math.floor(Math.random() * m--);
//         [deck[m], deck[i]] = [deck[i], deck[m]];  //swapping
//       //}
//     }
//       return this;
//     }
  
//     // deal(){
//     //   return this.deck.pop();
//     // }
//   }
  
//   const deck1 = new Deck();
//   for(var i=0;i<9;i++){
//   deck1.shuffle();
//   console.log(deck1.deck);
//   }
//   deck1.deal();
//   console.log(deck1.deck);
  
var utility=require('../oops/deckOfCards');

function deckOfCards(){
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      
    var n = suits.length * values.length;
    var deck = new Array(n);
    for (let i = 0; i < values.length; i++){
        for (let j = 0; j < suits.length;j++) {
            deck[suits.length*i + j] = values[i] + " of " + suits[j];
        }
    }

    // shuffle
    for ( i = 0; i < n; i++) {
        var r = i +parseInt(Math.random() * (n-i));
        var temp = deck[r];
        deck[r] = deck[i];
        deck[i] = temp;
    }

    // print shuffled deck
    for (let i = 0; i < 4; i++) {
        console.log();
        console.log("cards recieved by player no. "+(i+1));
        for(let j=0;j<9;j++){
            var arr=[];
            arr.push(deck[i+j*4]);
            console.log(arr);
        }
    }

}
deckOfCards();