import { useState } from "react";


export function ABInput() {

    const [myText, setMyText] = useState("");

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let newText = e.target.value.replace('a', 'b');

        setMyText(newText);
    }

    return (
        <>
            <label>
                Escribe algo: <input type="text" value={myText} onChange={onChangeHandler} />
            </label>
        </>
    );
}