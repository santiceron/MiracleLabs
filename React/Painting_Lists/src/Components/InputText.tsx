import { ChangeEvent } from "react";

interface InputTextProps {
    inputText: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function InputText({ inputText, onChangeHandler }: InputTextProps) {

    return (
        <input type="text" placeholder="Write new task" value={inputText} onChange={onChangeHandler} />
    );
}