import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, menProducts } from "../../ProductReducer/store";
import Card from "./Card";
import { Spinner } from "react-bootstrap";
import ProductHeader from "./ProductHeader";
import { Link } from "react-router-dom";
import { Grid, Row, SpinnerDiv, ArrowPointer } from "./CommonProductStyle";
import { Icon } from "semantic-ui-react";
import index from "../../UserAuth";

const MenProduct = ({
  products,
  loading,
  showActive,
  setShowActive,
  dispatch,
  handleCart,
  handleView,
}: any) => {
  React.useEffect(() => {
    menProducts(dispatch);
  }, []);
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
  return (
    <>
      <ProductHeader
        showActive={showActive}
        dispatch={dispatch}
        fetchProducts={fetchProducts}
        setShowActive={setShowActive}
        title='Men Collection'
        link='men'
        handleView={handleView}
      />

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
              disabled={index >= products.length - 4 && true}
              className={index >= products.length - 4 ? "next" : "next active"}
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
              disabled={index >= products.length - 3 && true}
              className={index >= products.length - 3 ? "next" : "next active"}
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
              disabled={index >= products.length - 2 && true}
              className={index >= products.length - 2 ? "next" : "next active"}
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

export default MenProduct;
