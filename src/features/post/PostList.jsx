import {useSelector}  from "react-redux";
import TimeAgo from "./TimeAgo";
import PostButtons from "./PostButtons";
const PostList = () => {
  const {posts} = useSelector((state) => state.posts);
  console.log("🚀 ~ file: PostList.jsx:5 ~ PostList ~ posts:", posts)
  
  return (
    <div className="mt-10">
      <h1 className="text-2xl ">PostList</h1>
      <div className="flex flex-col gap-5 mt-10 ">
        {posts?.map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-md hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">{`@${post.user}`}</span>
              <TimeAgo timestamp={post.date} />
            </div>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <PostButtons post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;