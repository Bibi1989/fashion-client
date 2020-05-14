import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, womenProducts } from "../../ProductReducer/store";
import Card from "./Card";
import { Spinner } from "react-bootstrap";
import ProductHeader from "./ProductHeader";
import { Grid, Row, SpinnerDiv, ArrowPointer } from "./CommonProductStyle";

const WomenProduct = ({
  products,
  loading,
  showActive,
  setShowActive,
  dispatch,
  handleCart,
  handleView,
}: any) => {
  React.useEffect(() => {
    womenProducts(dispatch);
  }, []);

  return (
    <>
      <ProductHeader
        showActive={showActive}
        dispatch={dispatch}
        fetchProducts={fetchProducts}
        setShowActive={setShowActive}
        title='Women Collection'
        link='women'
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

export default WomenProduct;
