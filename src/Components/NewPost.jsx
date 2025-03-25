import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnterAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enterAuthor,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      {/* <p>{enteredBody}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          cancel
        </button>
        <button>Post</button>
      </p>
    </form>
  );
}

export default NewPost;
