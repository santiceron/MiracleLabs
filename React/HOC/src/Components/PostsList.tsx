import withPosts, { Posts } from "./withPosts";


const PostsList = ({ posts }: { posts: Posts[] }) => {
    return (
        <>
            <h1>List of posts:</h1>
            {posts.map(post => (
                <ul key={post.id}>
                    <li><pre key={post.id}>{JSON.stringify(post, null, 2)}</pre></li>
                </ul>
            ))}
        </>
    );
};

const PostsListWithDataFetched = withPosts(PostsList);

export default PostsListWithDataFetched;