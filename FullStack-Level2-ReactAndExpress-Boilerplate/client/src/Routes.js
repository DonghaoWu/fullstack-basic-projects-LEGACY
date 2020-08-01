import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Example } from "./Components";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        /* Add your front-end route here */
        <Route component={Example} />;
      </Switch>
    );
  }
}

export default Routes;
