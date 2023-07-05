import React from "react";
import { useState} from "react";

function Letters() {

    function getLetter(){
        
        const alphabet = "abcdefghijklmnñopqrstuvwxyz";
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        return randomLetter;
    }
    
    const [myString, setMyString] = useState('');

    let incrementar = () => {
        setMyString(myString + getLetter());
    }

    let decrementar = () => {
        if(myString.length > 0){
            setMyString(myString.slice(0, -1));
        }        
    }

    return(
        <div>
            <h1>My string: {myString}</h1>
            <button onClick={incrementar}>Increment</button>
            <button onClick={decrementar}>Decrement</button>
        </div>
    );
}

export default Letters;