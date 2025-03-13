const DiceGame = require("./dice-game/dice-game.js");

const dices = process.argv.slice(2);

const game = new DiceGame(dices);

game.start();