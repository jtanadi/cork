import { default as posts } from "../fakeData";

const actions = {};

actions.fetchPosts = dispatch => {
  dispatch({ type: "SET_POSTS", posts });
};

export default actions;
