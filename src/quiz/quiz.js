const inquirer = require("inquirer");

class Quiz {
    #table;

    constructor(table) {
        this.#table = table;
    }

    async getQuiz(variants, title) {
        if (!Array.isArray(variants)) {
            variants = [...new Array(variants)].map((_, ind) => ind);
        }

        const questions = [
            {
                type: "list",
                name: "choice",
                message: title,
                choices: [
                    ...variants.map((value, ind) => ({
                        name: `${ind} - ${value}`,
                        value: ind,
                    })),
                    { name: "X - exit", value: -1 },
                    { name: "? - help", value: -2 },
                ],
            },
        ];

        const answers = await inquirer.prompt(questions);
        return await this.#handlerSelection(answers, variants, title);
    }

    async #handlerSelection(answers, variants, title) {
        if (answers.choice == -1) {
            process.exit(0);
        } else if (answers.choice == -2) {
            await this.#tableQuiz();
            return await this.getQuiz(variants, title);
        } else {
            return answers.choice;
        }
    }

    #tableQuiz() {
        const questions = [
            {
                type: "list",
                name: "table",
                message: "Press Enter to go back",
                choices: [{ name: "Back", value: 0 }],
            },
        ];

        console.log(this.#table);

        return inquirer.prompt(questions);
    }
}

module.exports = Quiz;
