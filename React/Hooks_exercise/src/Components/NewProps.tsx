import { useEffect } from "react";

type Props = {
    count: number;
}

export function NewProps(props: Props) {

    useEffect(() => {

        console.log("Actualizando!");

    }, [props.count]);

    return (
        <>
            <h2>Cuenta: {props.count}</h2>
        </>
    );
}