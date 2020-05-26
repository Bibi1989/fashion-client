import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SpinnerDiv } from "./CommonProductStyle";
import { Spinner, Dropdown } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import {
  menProducts,
  addOrder,
  filterByPriceLow,
  filterByPriceHigh,
} from "../../ProductReducer/store";
import { Header } from "./CommonProductStyle";

const AllMen = () => {
  const token = sessionStorage.getItem("ere_token");
  const dispatch = useDispatch();
  const history = useHistory();
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
        <Dropdown>
          <Dropdown.Toggle variant='info' id='dropdown-basic'>
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterByPriceLow(dispatch)}>
              Price: Lowest - Highest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByPriceHigh(dispatch)}>
              Price: Highest - Lowest
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
