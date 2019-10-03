import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import actions from "../store/actions";
import Home from "./Home";
import PostSingle from "./PostSingle";

/*
App Routes
  - Home route
    - Post cards
  - Create route
    - Create post
*/

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostSingle} />
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts() {
      actions.fetchPosts(dispatch);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
