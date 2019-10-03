import React, { Component } from "react";
import { connect } from "react-redux";

import PostCard from "./PostCard";

const Home = ({ posts }) => {
  return (
    <div id="posts-container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(Home);
