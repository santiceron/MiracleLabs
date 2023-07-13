import { useState } from "react";
import { DeleteTaskButton } from "./DeleteTaskButton";
import { ToDo } from "./ListContainer";

interface ListItemProps {
    children: ToDo,
    deleteTaskHandler: (toDoId: number) => void,
    editTaskHandler: (toDo: ToDo) => void,
}

export function ListItem({ children, deleteTaskHandler, editTaskHandler }: ListItemProps) {

    const [isEditing, setIsEditing] = useState(false);
    let toDoContent;

    if (isEditing) {
        toDoContent = (
            <>
                <input
                    type="text"
                    value={children.title}
                    onChange={e => {
                        editTaskHandler({
                            ...children,
                            title: e.target.value
                        });

                    }} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        toDoContent = (
            <>
                {children.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <li>
            <input type="checkbox" />
            {toDoContent}
            <DeleteTaskButton toDoId={children.id} deleteTaskHandler={deleteTaskHandler} />
        </li>

    );
}