import { useCallAPI } from "./useCallAPI";

export function Posts () {

    const data = useCallAPI("https://jsonplaceholder.typicode.com/posts");

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}