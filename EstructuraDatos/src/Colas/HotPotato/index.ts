
class CircularQueue {
    private players: string[];
    private index: number;
    private head: number;
    private tail: number;

    constructor() {
        this.players = [];
        this.index = 0;
        this.head = -1;
        this.tail = -1;
    }

    isEmpty() {
        return this.players.length === 0;
    }

    enqueue(player: string) {
        if (this.isEmpty()) {
            this.head = 0;
            this.tail = 0;
        } else {
            this.tail++;
        }

        this.players.push(player);
        return;
    }

    passPotato() {
        const currentPlayer = this.players[this.index];
        let nextPlayerIndex = this.index + 1;

        if (nextPlayerIndex > this.tail) {
            nextPlayerIndex = 0;
        }

        const nextPlayer = this.players[nextPlayerIndex];

        console.log(`${currentPlayer} passes the hot potato to ${nextPlayer}...`);

        this.index = nextPlayerIndex;
    }

    hotPotato(players: string[]) {
        console.log("¡Welcome to the Hot Potato game!");

        players.forEach((player) => this.enqueue(player));

        console.log("The game is about to start, get ready");

        function countdown(count: number, callback: () => void) {
            if (count > 0) {
                console.log(count);
                setTimeout(() => countdown(count - 1, callback), 1000);
            } else {
                console.log("Go!");
                callback();
            }
        }

        const round = (remainingTime: number) => {

            if (remainingTime <= 0) {
                const removedPlayer = this.players.splice(this.index, 1)[0];
                this.tail--;
                console.log(`${removedPlayer} is out of the game`);

                if (this.index >= this.players.length) {
                    this.index = 0;
                }

                if (this.players.length === 1) {
                    console.log(`¡${this.players[0]} is the winner!`);
                    return;
                }

                const nextTurnTime = Math.floor(Math.random() * 5000) + 1000;
                setTimeout(() => {
                    round(nextTurnTime);
                }, nextTurnTime);

            } else {
                const reactionTime = Math.floor(Math.random() * 500) + 750;

                setTimeout(() => {
                    this.passPotato();
                    round(remainingTime - reactionTime);
                }, reactionTime);
            }
        }

        countdown(3, () => {
            const roundTime = Math.floor(Math.random() * 5000) + 1000;
            round(roundTime);
        });

        return;
    }
}

const players = ["Juan", "Pepe", "Ana", "Maria", "Nacho", "Carla"];
const newGame = new CircularQueue();
newGame.hotPotato(players);