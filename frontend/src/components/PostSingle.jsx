import React, { Component } from "react";
import { connect } from "react-redux";

class PostSingle extends Component {
  componentDidUpdate(prevProps) {
    const { post } = this.props;
    if (post && prevProps.post !== post) {
      this.render();
    }
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (posts, location) => {
  return {
    post: posts.find(post => post.id == location.match.params.id)
  };
};

export default connect(mapStateToProps)(PostSingle);
