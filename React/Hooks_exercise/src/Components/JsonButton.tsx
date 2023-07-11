import { ReactNode, useState } from "react";

type JsonButtonProps = {
    children: ReactNode;
}

export function JsonButton({ children }: JsonButtonProps) {

    const [isVisible, setIsVisible] = useState(false);

    function onClickHandler() {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <button onClick={onClickHandler}>{isVisible ? "Hide json list" : "Show json list"}</button>
            {isVisible && children}
        </>
    );
}