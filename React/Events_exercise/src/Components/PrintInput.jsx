import { useState } from "react";

function PrintInput() {

    const [myText, setMyText] = useState('');

    return (
        <>
            <label>
                My text: <input value={myText} onChange={e => setMyText(e.target.value)} />
            </label>
            {myText !== '' && <p>{myText}</p>}
        </>
    );
}

export default PrintInput;