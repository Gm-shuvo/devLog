import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  heart: "❤️",
  hooray: "🎉",
  rocket: "🚀",
};

const PostButtons = ({ post }) => {
  const dispatch = useDispatch();
  console.log(Object.entries(reactionEmoji));
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([emoName, emoji]) => {
      return (
        <button
          key={emoName}
          type="button"
          className="m-1"
          onClick={() =>
            dispatch(reactionsAdded({ postId: post.id, reaction: emoName }))
          }
        >
          {emoji} {post.reactions[emoName]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};

export default PostButtons;
