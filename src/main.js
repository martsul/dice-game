const DiceGame = require("./dice-game/dice-game.js");
const RandomNumber = require("./random-number/random-number.js");

const dices = process.argv.slice(2);

const game = new DiceGame(dices);

game.start();
