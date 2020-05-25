import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./Redux/store";
import Nav from "./Nav/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing/Landing";
import AllProduct from "./Components/ProductCards/AllProducts";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Footer from "./Footer/Footer";
import AllMen from "./Components/ProductCards/AllMen";
import AllWomen from "./Components/ProductCards/AllWomen";
import OrderList from "./Components/OrderList/OrderList";
import Register from "./UserAuth/Register";

import Carousel from "./Carousel/index";

import "react-toastify/dist/ReactToastify.css";
import Login from "./UserAuth/Login";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Flex>
          <Div>
            <Nav />
            <Switch>
              <Route exact path='/'>
                <Landing />
                {/* <AllProduct /> */}
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/men'>
                <AllMen />
              </Route>
              <Route exact path='/women'>
                <AllWomen />
              </Route>
              <Route exact path='/cart'>
                <OrderList />
              </Route>
              <Route exact path='/product/:productId'>
                <SingleProduct />
              </Route>
              <Route exact path='/car'>
                <Carousel />
              </Route>
              <Route to='/abc'>
                <PageNotFound />
              </Route>
            </Switch>
          </Div>
          <Footer />
        </Flex>
      </Router>
    </Provider>
  );
}

export default App;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
export const Div = styled.div``;
