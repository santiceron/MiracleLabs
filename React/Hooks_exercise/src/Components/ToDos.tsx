import { useEffect, useState } from "react";

export function ToDos() {

    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setToDos(data);
            } catch (error){
                console.log("Error: ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <pre>{JSON.stringify(toDos, null, 2)}</pre>
    );
}