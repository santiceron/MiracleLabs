import { useRef, FormEvent } from "react";


export default function MyForm () {
    
    const fNameRef = useRef<HTMLInputElement>(null);
    const lNameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(fNameRef.current && lNameRef.current){
            const fName = fNameRef.current.value;
            const lName = lNameRef.current.value;

            console.log("First name: ", fName);
            console.log("Last name: ", lName);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">
                    First name: <input type="text" id="fname" name="fname" ref={fNameRef}/>
                </label><br />
                <label htmlFor="lname">
                    Last name: <input type="text" id="lname" name="lname" ref={lNameRef}/><br /><br />
                </label> 
                <button type="submit">Submit</button>
            </form>
        </>
    );
}