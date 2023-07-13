import { ChangeEvent, useState } from "react";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { AddTaskButton } from "./AddTaskButton";
import { InputText } from "./InputText";

export type ToDo = {
    id: number,
    title: string,
}

let nextId = 0;

export function ListContainer() {

    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [inputText, setInputText] = useState("");

    function addTaskHandler() {
        setToDos([
            ...toDos,
            {
                id: nextId++,
                title: inputText
            }
        ]);

        setInputText("");
    }

    function deleteTaskHandler(toDoId: number) {
        setToDos(
            toDos.filter(toDo => toDo.id !== toDoId)
        );
    }

    function editTaskHandler(editedToDo: ToDo) {
        setToDos(toDos.map(toDo => {
            if (toDo.id === editedToDo.id) {
                return editedToDo;
            } else {
                return toDo;
            }
        }));
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setInputText(e.target.value);
    }

    return (
        <>
            <div>
                <InputText inputText={inputText} onChangeHandler={onChangeHandler} />
                <AddTaskButton addTaskHandler={addTaskHandler} />
            </div>
            <List>
                {toDos.map(toDo => (
                    <ListItem key={toDo.id} deleteTaskHandler={deleteTaskHandler} editTaskHandler={editTaskHandler}>{toDo}</ListItem>
                ))}
            </List>
        </>
    );
}