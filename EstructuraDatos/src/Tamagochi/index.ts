
class Tamagochi {
    private name: string;
    private energy: number;
    private gender: string;
    private senseOfHumor: number;
    private age: number;
    private alive: boolean;
    private mealCounter: number;

    constructor(name: string, gender: string, senseOfHumor: number){    
        this.name = name;
        this.energy = 100;
        this.gender = gender;
        this.senseOfHumor = senseOfHumor;
        this.age = 0;
        this.alive =  true;
        this.mealCounter = 0;
    }

    getName(){
        return this.name;
    }

    getEnergy(){
        return this.energy;
    }

    getGender(){
        return this.gender;
    }

    getSenseOfHumor(){
        return this.senseOfHumor;
    }

    getAge(){
        return this.age;
    }

    hub(){
        console.log("\n\n" + this.getName() + "\nGender: " + this.getGender() + "\nAge: " + this.getAge() + "\nEnergy: " + this.getEnergy());
    }

    setAlive(value: boolean){
        this.alive = value;
        if(!value){
            console.log("Your Tamagochi has died :(");
        }
    }

    setEnergy(value: number){
        this.energy += value;

        if(this.energy > 100){
            this.energy = 100;
        } else if(this.energy <= 0){
            this.setAlive(false);
            return;
        }

        this.hub();
        return;
    }

    eat(){
        if(this.alive){
            if(this.mealCounter === 4){
                console.log("You've fed your Tamagochi too much");
                this.setAlive(false);
            } else{
                this.setEnergy(25);
                this.mealCounter++;
            }
        } else{
            console.log("Your Tamagochi is dead");
        }
    }

    drink(){
        if(this.alive){
            if(this.mealCounter === 4){
                console.log("You've fed your Tamagochi too much");
                this.setAlive(false);
            } else{
                this.setEnergy(25);
                this.mealCounter++;
            }
        } else{
            console.log("Your Tamagochi is dead");
        }
    }

    sleep(){
        if(this.alive){
            this.setEnergy(100);
        } else {
            console.log("Your Tamagochi is dead");
        }
    }

    walk(){
        if(this.alive){
            this.setEnergy(-10);
        } else {
            console.log("Your Tamagochi is dead");
        }
    }

    run(){
        if(this.alive){
            this.setEnergy(-20);
        } else {
            console.log("Your Tamagochi is dead");
        }
    }

    jump(){
        if(this.alive){
            this.setEnergy(-25);
        } else {
            console.log("Your Tamagochi is dead");
        }
    }
}

const myTamagochi = new Tamagochi("Carlos", "M", 3);
myTamagochi.hub();
myTamagochi.walk();
myTamagochi.run();
myTamagochi.eat();
myTamagochi.eat();
myTamagochi.jump();
