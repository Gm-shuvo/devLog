import {useSelector}  from "react-redux";

const PostList = () => {
  const {posts} = useSelector((state) => state.posts);
  console.log("🚀 ~ file: PostList.jsx:5 ~ PostList ~ posts:", posts)
  
  return (
    <div>
      <h1 className="text-lg text-red-300">PostList</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;