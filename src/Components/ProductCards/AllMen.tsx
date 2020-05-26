import React, { useEffect, useState } from "react";
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
  filterByDate,
} from "../../ProductReducer/store";
import { Header } from "./CommonProductStyle";
import { Icon } from "semantic-ui-react";

const AllMen = () => {
  const token = sessionStorage.getItem("ere_token");
  const dispatch = useDispatch();
  const [text, setText] = useState("Sort By");
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
          <Dropdown.Toggle id='dropdown-basic'>
            <Icon name='sort amount down' /> {text}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setText("Price: Lowest - Highest");
                filterByPriceLow(dispatch);
              }}
            >
              Price: Lowest - Highest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setText("Price: Highest - Lowest");
                filterByPriceHigh(dispatch);
              }}
            >
              Price: Highest - Lowest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByDate(dispatch)}>
              Date
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
