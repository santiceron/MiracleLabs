import { useEffect, useState } from "react";

export interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const withPosts = (Component: React.ComponentType<{ posts: Posts[] }>) => {
    const WrappedComponent = () => {

        const [posts, setPosts] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {            
                  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                  const data = await response.json();
                  setPosts(data);
            
                } catch (error) {
                  console.log("Error: ", error);
                }
              };
              fetchData();
        }, ["https://jsonplaceholder.typicode.com/posts"]);

        return <Component posts={posts}/>;
    };

    return WrappedComponent;
}

export default withPosts;