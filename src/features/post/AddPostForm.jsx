import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";

const AddPostForm = () => {
  // const formRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
     
    // const post = {
    //   id: nanoid(),
    //   title,
    //   content,
    //   user: (userId) ? users[userId].name : "Unknown",
    //   date: new Date().toISOString(),
    // };

    // console.log("🚀 ~ file: AddPostForm.jsx:58 ~ handlePost ~ post", post)
    dispatch(postAdded(title, content, users[userId]));
    setTitle('');
    setContent('');
    setUserId('');
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);


  return (
    <section className="max-w-2xl">
      <h1 className="text-3xl text-black font-semibold mb-8">Add a New Post</h1>
      <form onSubmit={handlePost} className=" flex flex-col gap-2 items-start justify-center">
        <label htmlFor="postTitle" className="text-gray-700 text-sm">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <label htmlFor="postContent" className="text-gray-700 text-sm">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        <label htmlFor="postAuthor" className="text-gray-700 text-sm">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          onChange={(e) => setUserId(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          <option className="text-gray-500 text-sm">Select an author</option>
          {users?.map((user) => (
            <option key={user.id} value={user.id} className="px-2 py-2">
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!canSave} className={`${!canSave ? "bg-slate-400/80 text-black" : "bg-blue-500 text-white" } mt-4 px-3 py-2 text-center rounded-md`}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm