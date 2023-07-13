
interface DeleteTaskButtonProps {
    deleteTaskHandler: (toDoId: number) => void;
    toDoId: number;
}

export function DeleteTaskButton({ deleteTaskHandler, toDoId }: DeleteTaskButtonProps) {

    return (
        <button onClick={() => deleteTaskHandler(toDoId)}>Delete</button>
    );
}