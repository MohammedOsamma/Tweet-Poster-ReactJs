// import Post from "./Components/Post";

import { useState } from "react";
import MainHeader from "./Components/MainHeader";
import PostList from "./Components/PostList";

function App() {
  const [modelIsVisable, setModelIsVisable] = useState(false);

  const hideModeHandler = () => {
    setModelIsVisable(false);
  };
  const ShowModeHandler = () => {
    setModelIsVisable(true);
  };
  return (
    <>
      <MainHeader onCreatePost={ShowModeHandler} />
      <main>
        <PostList
          isPosting={modelIsVisable}
          isPostingHandler={hideModeHandler}
        />
      </main>
    </>
  );
}

export default App;
