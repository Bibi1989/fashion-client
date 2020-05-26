import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SpinnerDiv } from "./CommonProductStyle";
import { Spinner, Dropdown } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import {
  womenProducts,
  addOrder,
  filterByPriceLow,
  filterByPriceHigh,
  filterByPriceLowWomen,
  filterByPriceHighWomen,
} from "../../ProductReducer/store";
import { Header } from "./CommonProductStyle";
import { Icon } from "semantic-ui-react";

const AllWomen = () => {
  const token = sessionStorage.getItem("ere_token");
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("Sort By");
  const women = useSelector(({ products }: any) => products.women);
  const loading = useSelector(({ products }: any) => products.loading);
  useEffect(() => {
    womenProducts(dispatch);
  }, []);
  const handleCart = (order: any) => {
    addOrder(dispatch, order, "1");
  };
  return (
    <>
      <Header>
        <h1>All Women Wears</h1>
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic'>
            <Icon name='sort amount down' /> {text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setText("Price: Lowest - Highest");
                filterByPriceLowWomen(dispatch);
              }}
            >
              Price: Lowest - Highest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setText("Price: Highest - Lowest");
                filterByPriceHighWomen(dispatch);
              }}
            >
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
            {women.map((product: any) => (
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

export default AllWomen;

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
