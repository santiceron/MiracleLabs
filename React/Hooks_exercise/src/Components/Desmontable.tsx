import { useState, useEffect } from "react";

export function Desmontador() {

    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        if (!isMounted)
            console.log("Desmontado!");
    }, [isMounted]);

    function onClickHandler() {
        setIsMounted(!isMounted);
    }

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <h2>Este es mi componente</h2>
            <button onClick={onClickHandler}>Desmontar</button>
        </>
    );
}