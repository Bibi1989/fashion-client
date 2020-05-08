import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
