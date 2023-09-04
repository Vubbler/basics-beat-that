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

// ------Global Variables----- //
var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var GAME_STATE_COMPARE_SCORES = "GAME_STATE_COMPARE_SCORES";
var gameState = GAME_STATE_DICE_ROLL;

var currentPlayerRolls = [];
var currentPlayer = 1;
var allPlayersScore = [];

// ------Helper Functions------ //
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(rollDice());
    counter += 1;
  }
  // if (currentPlayerRolls[0] == currentPlayerRolls[1]) {
  //   playerScore = Number(
  //     String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
  //   );
  //   return `Your chosen value is: ${playerScore}`;
  // }
  return `Welcome, Player ${currentPlayer}!<br><br>You rolled:<br>Dice 1: ${currentPlayerRolls[0]} | Dice 2: ${currentPlayerRolls[1]}<br><br>Now, please input either '1' or '2' to choose the corresponding dice to be used as the first digit of your final value.`;
};
var getPlayerScore = function (playerInput) {
  var playerScore;
  if (playerInput != 1 && playerInput != 2) {
    return `Error! Please only input '1' or '2' to choose which dice to use as the first digit.<br><br>Your dice rolls are:<br>Dice 1: ${currentPlayerRolls[0]} | Dice 2: ${currentPlayerRolls[1]}`;
  }
  if (playerInput == 1) {
    var playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
    return `Player ${currentPlayer},your chosen value is: ${playerScore}`;
  }
  if (playerInput == 2) {
    var playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
    allPlayersScore.push(playerScore);
    currentPlayerRolls = [];
    return `Player ${currentPlayer}, your chosen value is: ${playerScore}`;
  }
};

// end of helper functions //

var main = function (input) {
  var outputMessage = "";
  if (gameState == GAME_STATE_DICE_ROLL) {
    outputMessage = rollDiceForPlayer();
    gameState = GAME_STATE_CHOOSE_DICE_ORDER;
    return outputMessage;
  }
  if (gameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    outputMessage = getPlayerScore(input);
    if (currentPlayer == 1) {
      currentPlayer = 2;
      gameState = GAME_STATE_DICE_ROLL;
      return `${outputMessage}<br><br>It is now Player 2's turn!`;
    }
  }
  if (currentPlayer == 2) {
    gameState = GAME_STATE_COMPARE_SCORES;
    return `${outputMessage}<br><br>Press submit to calculate scores!`;
  }
};
