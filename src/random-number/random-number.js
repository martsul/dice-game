const { randomBytes } = require("crypto");
const crypto = require("crypto");

class RandomNumber {
    constructor(maxNum) {
        this.secretKey = this.#generateSecretKey().toString("hex");
        this.num = this.#generateNum(maxNum);
        this.hmac = this.#generateHMAC(this.num, this.secretKey);
    }

    #generateSecretKey() {
        return randomBytes(32);
    }

    #generateNum(max) {
        let randomNum = Math.random() * max;
        return Math.floor(randomNum);
    }

    #generateHMAC(num, secretKey) {
        let hmac = crypto.createHmac("sha3-256", secretKey);
        hmac.update(num.toString());
        return hmac.digest("hex");
    }
}

module.exports = RandomNumber;
