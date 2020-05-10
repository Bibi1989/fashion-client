import React, { useRef, useState } from "react";
import styled from "styled-components";
import { fetchProducts, filterProducts } from "../../ProductReducer/store";
import Card from "./Card";
import { Spinner } from "react-bootstrap";

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
        </Row>
      )}
    </>
  );
};

export default Product;

export const Grid = styled.div`
  display: flex;
  grid-gap: 2.5em;
  padding: 1em;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
  }
`;

export const Row = styled.div`
  padding: 3% 10%;

  @media (max-width: 1400px) {
  }
  @media (max-width: 1000px) {
    padding: 3% 5%;
  }
  @media (max-width: 800px) {
    padding: 3% 5%;
  }
  @media (max-width: 600px) {
    padding: 3% 1em;
  }
`;
export const SpinnerDiv = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 10% 0em 10%;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Li = styled.li`
  padding: 0.8em;

  cursor: pointer;

  &.active {
    border-bottom: 1px solid #999999;
  }
`;
