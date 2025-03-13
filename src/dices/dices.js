const DicesValidator = require("../dices-validator/dices-validator");
const chalk = require("chalk");

class Dices {
    #usersDice;
    #computersDice;

    constructor(dices) {
        try {
            this.#validateDices(dices);
            this.dices = dices;
        } catch (error) {
            console.log(chalk.red.bold(error.message));
            process.exit(0);
        }
    }

    set usersDice(choice) {
        this.#usersDice = this.dices[choice].split(",");
        if (!this.#computersDice) {
            this.#computersDice =
                choice == 0
                    ? this.dices[1].split(",")
                    : this.dices[0].split(",");
        }
    }
    set computersDice(choice) {
        this.#computersDice = this.dices[choice].split(",");
    }
    get usersDice() {
        return this.#usersDice.join(",");
    }
    get computersDice() {
        return this.#computersDice.join(",");
    }

    getUsersFace(choice) {
        return this.#usersDice[choice];
    }
    getComputersFace(choice) {
        return this.#computersDice[choice];
    }

    #validateDices(dices) {
        DicesValidator.validateNumberOfDices(dices);
        DicesValidator.validateIntegrityOfFacets(dices);
        DicesValidator.validateNumberOfFaces(dices);
    }
}

module.exports = Dices;
