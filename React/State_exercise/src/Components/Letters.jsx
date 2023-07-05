import React from "react";
import { useState} from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

function Letters() {

    function getLetter(){
        
        const alphabet = "abcdefghijklmnñopqrstuvwxyz";
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        return randomLetter;
    }
    
    const [myString, setMyString] = useState('');

    let increment = () => {
        setMyString(myString + getLetter());
    }

    let decrement = () => {
        if(myString.length > 0){
            setMyString(myString.slice(0, -1));
        }        
    }

    return(
        <div>
            <h1>My string: {myString}</h1>
            <IncrementButton onClick={increment}></IncrementButton>
            <DecrementButton onClick={decrement}></DecrementButton>
        </div>
    );
}

export default Letters;