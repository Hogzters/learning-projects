const team = {
    _players: [
      {firstName: 'Pete', lastName: 'Wheeler', age: 54},
      {firstName: 'Karina', lastName: 'Next', age: 26},
      {firstName: 'Ron', lastName: 'Doberman', age: 79}
    ],
    _games: [
      {opponent: 'A', teamPoints: 20, opponentPoints: 25},
      {opponent: 'B', teamPoints: 56, opponentPoints: 26},
      {opponent: 'C', teamPoints: 34, opponentPoints: 27}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName, 
        lastName: newLastName, 
        age: newAge,
      }
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  
  console.log(team)