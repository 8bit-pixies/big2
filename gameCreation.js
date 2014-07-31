GameFactory = {};

GameFactory.createGame = function(playerIds) {
  var deck = createDeck(),
      players = createPlayers(playerIds);
  
  GameFactory.dealPlayers(players, deck);
  
  //var table = dealTable(deck);
  
  return {
    players: players,
    table: [],
    currentTurn: playerIds,
    inProgress : true,
    started: new Date()
  };
};

GameFactory.dealPlayers = function(players, deck) {
  for (var i = 0; i < 13; i++) {
    Object.keys(players).forEach(function(id) {
      players[id].hand.push(deck.shift());
    });
  }
};


function createPlayers(ids) {
  var o = {};  
  ids.forEach(function (id){
    o[id] = {
      hand: [],
    }
  });  
  return o;
}

function createDeck () {
  var suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'],
  cards = [];
  
  suits.forEach(function (suit) {
    for (var i = 1; i <= 13; i++) {
      var name = i ;
      if (i == 1) name = 'A';
      if (i == 11) name = 'J';
      if (i == 12) name = 'Q';
      if (i == 13) name = 'K';
      cards.push({
        suit : suit,
        value: i,
        name : name
      });
    }
  });
  
  return _.shuffle(cards);
}