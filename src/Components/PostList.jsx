import { useEffect, useState } from "react";
import Model from "./Model";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = ({ isPosting, isPostingHandler }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);
  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "content-type": "application/json" },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Model onClose={isPostingHandler}>
          <NewPost onCancel={isPostingHandler} onAddPost={addPostHandler} />
        </Model>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ color: "white", textAlign: "center" }}>
          <p>Loading Posts ...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
