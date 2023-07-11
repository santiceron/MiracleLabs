import { useEffect, useState } from "react";


export function useCallAPI(url: string) {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }

        fetchData();

    }, []);

    return data;
}