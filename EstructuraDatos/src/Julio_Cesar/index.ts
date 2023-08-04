
//I'm using a fixed offset = 8, but it could be passed as a parameter in the function

function codeMessage(message: string): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let codedMessage = "";
    message = message.toUpperCase();

    for(const char of message){
        if(alphabet.includes(char)){
            const originalIndex = alphabet.indexOf(char);
            const codedIndex = (originalIndex + 8) % alphabet.length;
            codedMessage += alphabet[codedIndex];  
        } else{
            codedMessage += char;                                       //If the character is a blank space or other 
        }
    }

    codedMessage = codedMessage.split('').reverse().join('');    

    return codedMessage;
}

function decodeMessage(message: string): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decodedMessage = "";

    message = message.split('').reverse().join('');

    for(const char of message){
        if(alphabet.includes(char)){
            const codedIndex = alphabet.indexOf(char);
            const decodedIndex = (codedIndex - 8 + alphabet.length) % alphabet.length;
            decodedMessage += alphabet[decodedIndex];
        } else {
            decodedMessage += char;
        }
    }

    return decodedMessage;
}

console.assert(codeMessage("abcde") === "MLKJI")
console.assert(codeMessage("I'm Julius and... wait, there is someone behind me") === "MU LVQPMJ MVWMUWA AQ MZMPB ,BQIE ...LVI ACQTCR U'Q");
console.assert(decodeMessage("MLKJI") === "ABCDE");
console.assert(decodeMessage("MU LVQPMJ MVWMUWA AQ MZMPB ,BQIE ...LVI ACQTCR U'Q") === "I'M JULIUS AND... WAIT, THERE IS SOMEONE BEHIND ME");

//Item 2

function codeInverted(message: string): string {
    message = message.split('').reverse().join('');
    return codeMessage(message);
}

function decodeInverted(message: string): string {
    let decodedMessage = decodeMessage(message);
    decodedMessage = decodedMessage.split('').reverse().join('');
    return decodedMessage;
}

console.assert(codeInverted("ABC") === "IJK");
console.assert(decodeInverted("IJK") === "ABC");
console.assert(codeInverted("I'm Julius and... wait, there is someone behind me") === "Q'U RCTQCA IVL... EIQB, BPMZM QA AWUMWVM JMPQVL UM");
console.assert(decodeInverted("Q'U RCTQCA IVL... EIQB, BPMZM QA AWUMWVM JMPQVL UM") === "I'M JULIUS AND... WAIT, THERE IS SOMEONE BEHIND ME");