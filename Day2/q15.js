class Game {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }

    guess(number) {
        this.attempts++;
        if (number > this.randomNumber) {
            console.log("Lower");
        } else if (number < this.randomNumber) {
            console.log("Higher");
        } else {
            console.log(`Correct! Attempts: ${this.attempts}`);
            this.reset();
        }
    }

    reset() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }
}
