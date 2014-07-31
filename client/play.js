Template.hand.helpers({
  getSuit : function(suit) {
    if(suit=="Diamonds") suit="♦"
    if(suit=="Clubs") suit="♣"
    if(suit=="Hearts") suit="♥"
    if(suit=="Spades") suit="♠"
    return suit;
  }
});

Template.table.helpers({
  getSuit : function(suit) {
    if(suit=="Diamonds") suit="♦"
    if(suit=="Clubs") suit="♣"
    if(suit=="Hearts") suit="♥"
    if(suit=="Spades") suit="♠"
    return suit;
  }
});

/*reorderable list*/
/*
  since this is in the client.js if we want this to stick (sort by value and update)
  then we will need a helper function.
*/

Template.hand.rendered = function () {
  this.$('.hand').sortable();  // this behaviour isn't reactive but that is okay.
}






