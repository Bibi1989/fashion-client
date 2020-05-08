import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Nav from "./Nav/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
