import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SpinnerDiv } from "./Product";
import { Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { menProducts, addOrder } from "../../ProductReducer/store";
import { Header } from "./ProductHeader";

const AllMen = () => {
  const dispatch = useDispatch();
  const men = useSelector(({ products }: any) => products.men);
  const loading = useSelector(({ products }: any) => products.loading);
  useEffect(() => {
    menProducts(dispatch);
  }, []);
  const handleCart = (order: any) => {
    addOrder(dispatch, order, "1");
  };
  return (
    <>
      <Header>
        <h1>All Men Wears</h1>
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
            {men.map((product: any) => (
              <CategoryCard
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}
          </Grid>
        </Row>
      )}
    </>
  );
};

export default AllMen;

export const Row = styled.div`
  padding: 3% 10%;

  @media (max-width: 1100px) {
    padding: 3% 5%;
  }
  @media (max-width: 800px) {
    padding: 3% 5%;
  }
  @media (max-width: 600px) {
    padding: 3% 1em;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
