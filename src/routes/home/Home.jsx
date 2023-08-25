// import { Outlet } from "react-router-dom";

import AddPostForm from "../../features/post/AddPostForm";
import PostList from "../../features/post/PostList";

const Home = () => {
  return (
    <div className="px-8 bg-inherit">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default Home;