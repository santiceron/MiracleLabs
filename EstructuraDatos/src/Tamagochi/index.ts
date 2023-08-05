
class Tamagochi {
    private name: string;
    private energy: number;
    private gender: string;
    private senseOfHumor: number;
    private age: number;
    private alive: boolean;
    private mealCounter: number;
    private ageTimer: NodeJS.Timeout | null;

    constructor(name: string, gender: string, senseOfHumor: number) {
        this.name = name;
        this.energy = 100;
        this.gender = gender;
        this.senseOfHumor = senseOfHumor;
        this.age = 0;
        this.alive = true;
        this.mealCounter = 0;
        this.ageTimer = null;

        this.startAgeTimer();
    }

    getName() {
        return this.name;
    }

    getEnergy() {
        return this.energy;
    }

    getGender() {
        return this.gender;
    }

    getSenseOfHumor() {
        return this.senseOfHumor;
    }

    getAge() {
        return this.age;
    }

    hub() {
        console.log("\n\n" + this.getName() + "\nGender: " + this.getGender() + "\nAge: " + this.getAge() + "\nEnergy: " + this.getEnergy());
    }

    setAlive(value: boolean) {
        this.alive = value;
        if (!value) {
            console.log(this.name + " has died :(\n");
        }
    }

    setEnergy(value: number) {
        this.energy += value;

        if (this.energy > 100) {
            this.energy = 100;
        } else if (this.energy <= 0) {
            this.setAlive(false);
            return;
        }

        this.hub();
        return;
    }

    eat() {
        if (this.alive) {
            if (this.mealCounter === 4) {
                console.log("\nYou've fed " + this.name + " too much");
                this.setAlive(false);
            } else {
                this.setEnergy(25);
                this.mealCounter++;
                console.log("You've fed " + this.name);
            }
        } else {
            console.log(this.name + "is dead");
        }
    }

    drink() {
        if (this.alive) {
            if (this.mealCounter === 4) {
                console.log(this.name + " drank too much");
                this.setAlive(false);
            } else {
                this.setEnergy(15);
                this.mealCounter++;
            }
        } else {
            console.log(this.name + " is dead");
        }
    }

    sleep() {
        if (this.alive) {
            this.setEnergy(100);
        } else {
            console.log(this.name + " is dead");
        }
    }

    walk() {
        if (this.alive) {
            this.setEnergy(-10);
            console.log(this.name + " walked");
        } else {
            console.log(this.name + " is dead");
        }
    }

    run() {
        if (this.alive) {
            this.setEnergy(-20);
            console.log(this.name + " ran");
        } else {
            console.log(this.name + " is dead");
        }
    }

    jump() {
        if (this.alive) {
            this.setEnergy(-25);
            console.log(this.name + " jumped");
        } else {
            console.log(this.name + " is dead");
        }
    }

    //Every 2 minutes age will increase
    startAgeTimer() {
        this.ageTimer = setInterval(() => {
            this.age++;
            console.log(this.name + " is now " + this.age + " years old");
        }, 2 * 60 * 1000);
    }

    //For stopping the age timer
    private stopAgeTimer() {
        if (this.ageTimer !== null) {
            clearInterval(this.ageTimer);
        }
    }
}

class TamagochiCollection {
    private tamagochis: Tamagochi[];

    constructor() {
        this.tamagochis = [];
    }

    add(tamagochi: Tamagochi) {
        this.tamagochis.push(tamagochi);
    }

    find(name: string): boolean {
        if (this.findIndex(name) === -1) {
            return false;
        } else {
            return true;
        }
    }

    findIndex(name: string): number {

        for (let i = 0; i < this.tamagochis.length; i++) {
            if (this.tamagochis[i].getName() === name) {
                return i;
            }
        }

        return -1;
    }

    delete(name: string) {
        const index = this.findIndex(name);

        if (index === -1) {
            console.log(name + "doesn't exists");
        } else {
            this.tamagochis.splice(index, 1);
        }
    }

    print() {
        console.log("Your tamagochi collection: \n");

        for (let i = 0; i < this.tamagochis.length; i++) {
            console.log(this.tamagochis[i].getName() + " | " + this.tamagochis[i].getGender() + " | Age: "
                + this.tamagochis[i].getAge() + " | Energy: " + this.tamagochis[i].getEnergy());
        }
    }
}

const carlos = new Tamagochi("Carlos", "M", 3);
const pikachu = new Tamagochi("Pikachu", "F", 2);

const collection = new TamagochiCollection();
collection.add(carlos);
collection.add(pikachu);

console.assert(collection.find("Carlos"));
console.assert(collection.findIndex("Pikachu") === 1);