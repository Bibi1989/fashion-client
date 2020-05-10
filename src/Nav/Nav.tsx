import React, { useEffect } from "react";
import { Container, Row, ShowCart } from "./style";
import { Button, Input } from "semantic-ui-react";
import { Nav, Navbar } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { Cart } from "./Cart";
import { fetchProducts } from "../ProductReducer/store";
import { Link } from "react-router-dom";

const Navs = () => {
  const dispatch = useDispatch();
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
  console.log(products);
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
              {true ? (
                <>
                  <Nav.Link href='#' style={{ position: "relative" }}>
                    <Button className='btn_login'>Login</Button>
                  </Nav.Link>
                  <Nav.Link href='#' style={{ position: "relative" }}>
                    <Button className='btn_register'>Register</Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href='#' style={{ position: "relative" }}>
                    <Button className='btn_login'>Logout</Button>
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
