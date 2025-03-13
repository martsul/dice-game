const Quiz = require("../quiz/quiz.js");
const RandomNumber = require("../random-number/random-number");

class InteractiveConsole {
    #quiz;

    constructor(table) {
        this.#quiz = new Quiz(table);
    }

    async startDecideWhoFirst() {
        const randomNumber = new RandomNumber(1);

        console.log(
            `Let's determine who makes the first move.\nI selected a random value in the range 0..1 (HMAC=${randomNumber.hmac}).`
        );
        const answer = await this.#quiz.getQuiz(
            2,
            "Try to guess my selection."
        );

        console.log(
            `My selection: ${randomNumber.num} (KEY=${randomNumber.secretKey}).`
        );

        return answer == randomNumber.num;
    }

    async startChoosingDices(userGoesFirst, dices) {
        if (userGoesFirst) {
            const answer = await this.#quiz.getQuiz(dices.dices);
            dices.usersDice = answer;
            console.log(`I choose the ${dices.computersDice}`);
        } else {
            dices.computersDice = 0;
            console.log(`I choose the ${dices.computersDice}`);
            const answer = await this.#quiz.getQuiz(dices.dices.slice(1));
            dices.usersDice = answer + 1;
        }
    }

    async startGame(dices, countFaces) {
        const phrases = [
            "It's time for my throw.",
            "It's time for your throw.",
        ];
        const results = [];

        for (const phrase of phrases) {
            const randomNumber = new RandomNumber(countFaces - 1);
            console.log(
                `${phrase}\nI selected a random value in the range 0..${
                    countFaces - 1
                } (HMAC=${randomNumber.hmac}).`
            );

            const answer = await this.#quiz.getQuiz(
                countFaces,
                `Add your number modulo ${countFaces}.`
            );

            const module = (answer + randomNumber.num) % countFaces;
            const result = results.length
                ? dices.getUsersFace(module)
                : dices.getComputersFace(module);
            results.push(result);

            console.log(
                `My number is ${randomNumber.num} (KEY=${randomNumber.secretKey}).\nThe result is ${randomNumber.num} + ${answer} = ${module} (mod ${countFaces}).\nThe throw is ${result}.`
            );
        }

        if (results[0] > results[1]) {
            console.log(`You lose (${results[0]} > ${results[1]})!`);
        } else if (results[1] > results[0]) {
            console.log(`You win (${results[0]} > ${results[1]})!`);
        } else {
            console.log(`Draw (${results[0]} = ${results[1]})!`);
        }
    }
}

module.exports = InteractiveConsole;
