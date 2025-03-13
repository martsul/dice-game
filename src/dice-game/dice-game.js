const Dices = require("../dices/dices");
const InteractiveConsole = require("../interactive-console/interactive-console");
const ProbabilityTable = require("../probability-table/probability-table");

class DiceGame {
    #dices;
    #countFaces;
    #table;

    constructor(receivedDices) {
        this.#dices = new Dices(receivedDices);
        this.#countFaces = receivedDices[0].split(",").length;
        this.#table = new ProbabilityTable(receivedDices);
    }

    async start() {
        const interactiveConsole = new InteractiveConsole(this.#table.table);

        const userGoesFirst = await interactiveConsole.startDecideWhoFirst();
        await interactiveConsole.startChoosingDices(userGoesFirst, this.#dices);
        await interactiveConsole.startGame(this.#dices, this.#countFaces);
    }
}

module.exports = DiceGame;
