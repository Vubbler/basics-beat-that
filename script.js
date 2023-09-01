// Requirements //
// 1) There are 2 players and players take turns
// 2) when a player clicks submit, the game rolls 2 dice and shows the dice rolls, for example 4 and 6
// 3) the player picks the order of the dice they want, dice 1 or dice 2.
// 4) after both players have rolled and chosen dice order, the player with the higher combined number wins.

// ===== problem breakdown and planning === //
// ver 1. rolls 2 dice and returns the output for 1 player. That player chooses the dice order and get the correct return output.
// ver 2. refactor code to include player 2.
// ver 3. implement comparing dice scores and declare winner.
// ver 4. reset the game so that the players can play continually without refreshing the browser page.
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
var gameMode = "Start";
var main = function () {
  if ((gameMode = "start")) {
    var die1 = rollDie();
    var die2 = rollDie();
    return `Welcome Player One! <br> <br> You rolled ${die1} for first die and ${die2} for the second die. <br> Please key 1 or 2 to choose the dice order!`;
  }
};
