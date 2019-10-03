import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import actions from "../store/actions";
import Home from "./Home";

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
