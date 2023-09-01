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

//create game state variables for 2 steps in the game for one player
var GAME_STATE_FOR_DICE_ROLL = "GAMESTATE FOR DICE ROLL";
var GAME_STATE_FOR_DICE_ORDER = "GAME STATE FOR DICE ORDER";
var gameState = GAME_STATE_FOR_DICE_ROLL;

//create an array to store player's dice roll values
var playerRolls = [];

//create a helper function to imitate rolling dice
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
//create a helper function to roll two dice and return a message
var rollDiceForPlayer = function () {
  console.log(`Control flow: start of rollDiceForPlayer()`);
  for (count = 0; count < 2; count += 1) {
    playerRolls.push(rollDie());
  }

  console.log(`rollDiceForPlayer changes, playerRolls: `, playerRolls);
  return `Welcome<br><br>You rolled:<br>Dice 1: ${playerRolls[0]} | Dice 2: ${playerRolls[1]}<br><br>Now please input either "1" or "2" to choose the corresponding dice to be used as the first digit of your final value.`;
};
var main = function (input) {
  console.log(`Checking game state on submit click: `, gameState);
  var myOutputMessage = "";
  if (gameState == GAME_STATE_FOR_DICE_ROLL) {
    console.log(`Control flow: gameState == GAME_STATE_DICE_ROLL`);
    //display the dice rolled as output message
    myOutputMessage = rollDiceForPlayer();
    //change the game state
    gameState = GAME_STATE_FOR_DICE_ORDER;
    return myOutputMessage;
  }
  if (gameState == GAME_STATE_FOR_DICE_ORDER) {
    console.log(`Control flow: gameState == GAME_STATE_FOR_DICE_ORDER`);
    //input validation
    if (input != 1 && input != 2) {
      console.log(
        `Control flow: input validation, invalid input ... NOT 1 AND NOT 2`
      );
      //return an error message
      return `Error! Please only input '1' or '2' to choose which dice to use as the first digit.<br><br>Your dice rolls are:<br>Dice 1: ${playerRolls[0]} | Dice 2: ${playerRolls[1]} `;
    }
    // input == 1
    if (input == 1) {
      console.log(`Control flow: input == 1`);
      //add dice values by converting to strings, concatenate them, then convert the result back to integers
      var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));
      return `Your chosen value is: ${playerScore}`;
    }

    // input == 2
    if (input == 2) {
      console.log(`Control flow: input == 2`);
      //add dice values by converting to strings, concatenate them, then convert the result back to integers
      var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
      return `Your chosen value is: ${playerScore}`;
    }
  }
};
