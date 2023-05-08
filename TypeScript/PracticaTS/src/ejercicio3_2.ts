/*1 Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘
2 Haz que el parámetro de ‘message‘ sea *optional* */

const bankAccount = {
    money: 0,
    deposit(value:number, message?:string):void {

        this.money += value;

        if (message) {
            console.log(message);
        }
    }
};

bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received')

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);