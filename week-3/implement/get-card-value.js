// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card, 
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
function getCardValue(card){
    // Removing last character if input contains (♠, ♥, ♦, ♣)
    const selectFirstChar = card.slice(-1);
    const suits = ["♠", "♥", "♦", "♣"];
    // If the last character is not present
    let rank;
    if(suits.includes(selectFirstChar)){
     rank = card.slice(0,-1); // remove last character
    }
    else{
        rank = card;
    }
    // handel number card 2-10 
    if(!isNaN(rank)){
     const numberValue = parseInt(rank);
     if(numberValue >=2 && numberValue <=10){
        return numberValue;
     }
    }
    // Handle Face Cards (J, Q, K)
    if(rank === "J" || rank === "Q" || rank === "K"){
        return 10;
    }
    // Handle Ace (A)
    if(rank === "A"){
        return 11;
    }
    throw new Error("invalid card rank")
}
try{
  console.log(getCardValue("2♣"));
  console.log(getCardValue("10♦"));
  console.log(getCardValue("7"));

  console.log(getCardValue("A"));
    console.log(getCardValue("J♠")); 
  console.log(getCardValue("Q♦")); 
  console.log(getCardValue("K")); 
  // throw an error 
  console.log(getCardValue("1♣"));
}
catch(e){
  console.log("Caught error:", e.message);
}