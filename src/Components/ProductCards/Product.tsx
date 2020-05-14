import React, { useRef, useState } from "react";
import styled from "styled-components";
import { fetchProducts, filterProducts } from "../../ProductReducer/store";
import Card from "./Card";
import { Spinner } from "react-bootstrap";
import {
  Grid,
  Row,
  SpinnerDiv,
  Header,
  Ul,
  Li,
  ArrowPointer,
} from "./CommonProductStyle";

const Product = ({
  products,
  loading,
  showActive,
  setShowActive,
  dispatch,
  handleCart,
  handleView,
}: any) => {
  return (
    <>
      <Header>
        <h2>Latest Collection</h2>
        <Ul>
          <Li
            className={showActive.all ? "active" : ""}
            onClick={() => {
              fetchProducts(dispatch);
              setShowActive({
                all: true,
                men: false,
                women: false,
              });
            }}
          >
            All
          </Li>
          <Li
            className={showActive.women ? "active" : ""}
            onClick={() => {
              filterProducts(dispatch, "women");
              setShowActive({
                all: false,
                men: false,
                women: true,
              });
            }}
          >
            Women
          </Li>
          <Li
            className={showActive.men ? "active" : ""}
            onClick={() => {
              filterProducts(dispatch, "men");
              setShowActive({
                all: false,
                men: true,
                women: false,
              });
            }}
          >
            Men
          </Li>
        </Ul>
      </Header>
      {loading ? (
        <SpinnerDiv>
          <Spinner
            animation='border'
            variant='success'
            style={{ width: "80px", height: "80px" }}
          />
        </SpinnerDiv>
      ) : (
        <Row>
          <Grid>
            {products.map((product: any) => (
              <Card
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleView={handleView}
              />
            ))}
          </Grid>
          <ArrowPointer>&#9755;</ArrowPointer>
        </Row>
      )}
    </>
  );
};

export default Product;
