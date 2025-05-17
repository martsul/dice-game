# 🎲 Dice Duel — A Fair Dice Game in Node.js

**Dice Duel** is a command-line dice game between a user and the computer. Its main feature is **provable fairness** using **HMAC**, allowing the player to verify that the computer doesn't cheat.

## 🎥 Video Demo

Watch a full gameplay demo here:  
📺 [Gameplay Overview on YouTube](https://youtu.be/Sz3t_NzXTv4)

## 🔧 Features

- ⚙️ Choose any number of 6-sided dice
- 🧠 The computer secretly picks a number (0 or 1). Guess correctly to go first!
- 🎲 During the game, both the player and the computer select die faces; their sums determine the final roll
- 🏆 The higher total wins the round
- 🔐 **HMAC-based fairness** — the computer reveals a hash of its secret move before each round and shows the key afterward so the player can verify
- 📊 Built-in statistics to show your chances of winning with different numbers of dice

## 🔐 How Fairness Works (HMAC)

Before each roll, the computer:

1. Generates a random number (0 or 1)
2. Calculates `HMAC_SHA256(secret_key, number)`
3. Shows the HMAC **before** revealing the actual number
4. After the round, shows both the `secret_key` and `number`
5. You can verify the integrity yourself

## 🚀 Installation

```bash
git clone https://github.com/martsul/dice-game.git
cd dice-game
npm install
node src/main.js 1,2,3,4,5,6 1,2,3,4,5,6 1,2,3,4,5,6 1,2,3,4,5,6
