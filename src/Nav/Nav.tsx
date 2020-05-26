import React, { useEffect } from "react";
import { Container, Row, ShowCart } from "./style";
import { Button, Input } from "semantic-ui-react";
import { Nav, Navbar } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { Cart } from "./Cart";
import { fetchProducts } from "../ProductReducer/store";
import { Link, useHistory } from "react-router-dom";
import { RegisterInterface } from "../UserReducer/interface";
import { logoutUser } from "../UserReducer/store";

const Navs = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token: any = sessionStorage.getItem("ere_token");
  const user = sessionStorage.getItem("ere_user");
  const order_loading = useSelector(
    ({ products }: any) => products.order_loading
  );
  const count = useSelector(({ products: { add_order } }: any) => add_order);
  useEffect(() => {
    fetchProducts(dispatch);

    // eslint-disable-next-line
  }, [order_loading, count]);
  const fashion = localStorage.getItem("fashions");
  const products = useSelector(({ products: { products } }: any) => products);

  return (
    <Container>
      <Row>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='light'
          variant='light'
          style={{ padding: "1em 10%", margin: "0 !important" }}
        >
          <Link to='/'>
            <Navbar.Brand>
              <h2 style={{ fontWeight: "bolder", color: "orangered" }}>
                Ere Place
              </h2>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Input loading placeholder='Search...' className='input' />
              <ShowCart>
                <Cart fashion={fashion} />
              </ShowCart>
              {!token ? (
                <>
                  <Link
                    to='/login'
                    style={{ position: "relative", paddingTop: "0.4em" }}
                  >
                    <Button className='btn_login'>Login</Button>
                  </Link>
                  <Link
                    to='/register'
                    style={{ position: "relative", paddingTop: "0.4em" }}
                  >
                    <Button className='btn_register'>Register</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    href='#'
                    style={{ position: "relative", paddingTop: "0.4em" }}
                  >
                    <Button
                      className='btn_login'
                      onClick={() => {
                        logoutUser(dispatch, history);
                      }}
                    >
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Navs;
