/*****************************************************************************************
 *purpose   : To print the cards received by 4 players using 2D array.      
 * @file    : deckOfCards.js
 * @overview: To initialize deck of cards having suit and Rank then shuffle the cards using Random 
 *            method and then distribute 9 Cards to 4 Players and Print the Cards the received by
 *            the 4 Players
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 07/01/2019 
 ************************************************************************************/ 
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