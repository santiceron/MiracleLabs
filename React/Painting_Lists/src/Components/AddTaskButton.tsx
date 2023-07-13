
interface AddTaskButtonProps {
    addTaskHandler: () => void;
}

export function AddTaskButton({ addTaskHandler }: AddTaskButtonProps) {

    return (
        <button onClick={addTaskHandler}>Add task</button>
    );
}