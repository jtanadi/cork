import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card-container w-25 p-2">
      <Link to={`/post/${post.id}`}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
