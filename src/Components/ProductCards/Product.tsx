import React, { useRef, useState } from "react";
import styled from "styled-components";
import { fetchProducts, filterProducts } from "../../ProductReducer/store";
import Card from "./Card";
import { Spinner } from "react-bootstrap";
// import Carousel from "react-elastic-carousel";
import {
  Grid,
  Row,
  SpinnerDiv,
  Header,
  Ul,
  Li,
  ArrowPointer,
} from "./CommonProductStyle";
import { Icon } from "semantic-ui-react";

// const nextStyle = {
//   position: "absolute",
//   top: "40%",
//   right: "0px",
//   background: "white",
//   width: "40px",
//   height: "40px",
//   border: "0.3px solid #ddd",
//   boxShadow: "0 2px 10px #eee",
//   borderRadius: "50%",
//   transform: "translateY(-50%)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
// };
// const prevStyle = {
//   position: "absolute",
//   top: "40%",
//   left: "0px",
//   background: "white",
//   width: "40px",
//   height: "40px",
//   border: "0.3px solid #ddd",
//   boxShadow: "0 2px 10px #eee",
//   borderRadius: "50%",
//   transform: "translateY(-50%)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
// };

const Product = ({
  products,
  loading,
  showActive,
  setShowActive,
  dispatch,
  handleCart,
  handleView,
}: any) => {
  const [index, setIndex] = React.useState(0);
  //   products = products.slice(index, index + 3);

  const handlePrev = (num: number) => {
    setIndex((c) => (c -= num));
    // if (index <= 0) {
    //   setIndex(-3 + products.length);
    // }
  };
  const handleNext = (num: number) => {
    setIndex((c) => (c += num));
    // if (index > products.length - 4) {
    //   setIndex(0);
    // }
  };
  console.log(index);
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
          <Grid className='four'>
            {products.slice(index, index + 4).map((product: any) => (
              <Card
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleView={handleView}
              />
            ))}
            <Icon
              disabled={index <= 0 && true}
              className={index <= 0 ? "prev" : "prev active"}
              name='chevron left'
              size='big'
              color='grey'
              onClick={() => handlePrev(4)}
            />
            <Icon
              disabled={index > products.length - 4 && true}
              className={index > products.length - 4 ? "next" : "next active"}
              name='chevron right'
              size='big'
              color='grey'
              onClick={() => handleNext(4)}
            />
          </Grid>
          <Grid className='three'>
            {products.slice(index, index + 3).map((product: any) => (
              <Card
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleView={handleView}
              />
            ))}
            <Icon
              disabled={index <= 0 && true}
              className={index <= 0 ? "prev" : "prev active"}
              name='chevron left'
              size='big'
              color='grey'
              onClick={() => handlePrev(3)}
            />
            <Icon
              disabled={index > products.length - 3 && true}
              className={index > products.length - 3 ? "next" : "next active"}
              name='chevron right'
              size='big'
              color='grey'
              onClick={() => handleNext(3)}
            />
          </Grid>
          <Grid className='two'>
            {products.slice(index, index + 2).map((product: any) => (
              <Card
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleView={handleView}
              />
            ))}
            <Icon
              disabled={index <= 0 && true}
              className={index <= 0 ? "prev" : "prev active"}
              name='chevron left'
              size='big'
              color='grey'
              onClick={() => handlePrev(2)}
            />
            <Icon
              disabled={index > products.length - 2 && true}
              className={index > products.length - 2 ? "next" : "next active"}
              name='chevron right'
              size='big'
              color='grey'
              onClick={() => handleNext(2)}
            />
          </Grid>
          <Grid className='one'>
            {products.slice(index, index + 1).map((product: any) => (
              <Card
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleView={handleView}
              />
            ))}
            <Icon
              disabled={index <= 0 && true}
              className={index <= 0 ? "prev" : "prev active"}
              name='chevron left'
              size='big'
              color='grey'
              onClick={() => handlePrev(1)}
            />
            <Icon
              disabled={index >= products.length - 1 && true}
              className={index >= products.length - 1 ? "next" : "next active"}
              name='chevron right'
              size='big'
              color='grey'
              onClick={() => handleNext(1)}
            />
          </Grid>
        </Row>
      )}
    </>
  );
};

export default Product;
