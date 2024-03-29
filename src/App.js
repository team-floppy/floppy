import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "./Pages/AuthPages/Register";
import Example from "./Examples/Example";
import Login from "./Pages/AuthPages/Login";
import UserType from "./Pages/SetUpPages/UserType";
import Home from "./Pages/HomePage/Home"
import Landing from "./Pages/FrontPages/Landing";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={Login} />
          <Route path="/setup" component={UserType} />
          <Route path="/home"  component={Home}/>
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    );
  }
}

export default App;
