const Table = require("cli-table3");

class ProbabilityTable {
    #table;

    constructor(dices) {
        this.#table = new Table({ head: ["User dice v", ...dices] });
        this.#probabilityCalculation(
            dices.map((dice) => dice.split(",").map(Number))
        );
    }

    #probabilityCalculation(dices) {
        dices.forEach((firstDice, i) => {
            const row = [firstDice.join(",")];
            dices.forEach((secondDice, j) => {
                if (firstDice.join(",") == secondDice.join(",")) {
                    row.push("- (0.3333)");
                    return;
                }
                let numberLargeNumber = 0;
                firstDice.forEach((firstFace) => {
                    numberLargeNumber += secondDice.filter(
                        (secondFace) => firstFace > secondFace
                    ).length;
                });

                row.push(
                    (numberLargeNumber / (firstDice.length * secondDice.length)).toFixed(4)
                );
            });
            this.#table.push(row);
        });
    }

    get table() {
        return this.#table.toString();
    }
}

module.exports = ProbabilityTable;
