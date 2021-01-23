var deck = [];

function generateDeck() {

    var suits = { diamond: "diamond", heart:"hearts", clubs:"clubs" , spades:"spades" , _property: { length: 4 }}
    var ranks = { 
        Ace:"ace",
        One: 1,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: "jack",
        Queen:"queen",
        King: "king",
        _property : {
            length: 14
        }
    }

    function generateCardPairs(){
        //create a new object and push that into the deck?

        //first we have to generate a random pair of suit, and rank. 
        function randomPair(){
            Math.random(0, suits.length ) //grab the a random number of the cards
        }
        //then we have to make sure our current built deck does not have the new generated pair

        deck.push( {  }   );
    }

    console.log(deck)


}

generateDeck()
