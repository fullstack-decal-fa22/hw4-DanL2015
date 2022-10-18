import { useState } from "react";
import React from "react";
import Menu from "./Menu";
import Block from "./Block";

const Feed = () => {
  /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
  // Refer to Hint 2 for more help!

  /* Use the map() function to render multiple Blocks! */
  const [posts, setPosts] = useState([]);

  function addPost(x) {
    setPosts([...posts, x]);
  }

  return (
    <div>
      <Menu addPost={addPost}></Menu>
      {posts.map((item, i) => (
        <Block color={item}></Block>
      ))}
    </div>
  );
};

export default Feed;
