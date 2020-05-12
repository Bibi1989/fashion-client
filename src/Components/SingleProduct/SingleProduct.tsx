import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, addOrder } from "../../ProductReducer/store";
import { SpinnerDiv } from "../ProductCards/Product";
import { Spinner } from "react-bootstrap";
import { Dropdown, Icon, Rating } from "semantic-ui-react";
import { Row, Grid } from "../ProductCards/AllMen";
import { Header } from "../ProductCards/MenProducts";
import CategoryCard from "../ProductCards/CategoryCard";
// import { Label, Buttons } from "../ProductCards/Card";
const quantityArray = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
  { text: "3", value: "3" },
  { text: "4", value: "4" },
  { text: "5", value: "5" },
  { text: "6", value: "6" },
  { text: "7", value: "7" },
  { text: "8", value: "8" },
  { text: "9", value: "9" },
];

const SingleProduct = () => {
  const { productId } = useParams();
  const [increase, setIncrease] = useState(1);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const product = useSelector(({ products: { product } }: any) => product);
  const products = useSelector(({ products: { products } }: any) => products);
  const loading = useSelector(({ products: { loading } }: any) => loading);
  const orders = useSelector(({ products: { orders } }: any) => orders);
  const images =
    (product.image_url !== undefined && JSON.parse(product.image_url)) || [];
  useEffect(() => {
    getSingleProduct(dispatch, productId);
  }, [increase]);
  const handleCart = (pro: any) => {
    addOrder(dispatch, pro, "1");
    console.log(pro);
  };
  const handleView = () => {
    window.scrollTo(0, 0);
    setIncrease(increase + 1);
  };
  const handleImageSelection = (i: number) => {
    setIndex(i);
  };
  const next = () => {
    setIndex(index + 1);
    if (index >= images.length - 1) {
      setIndex(0);
    }
  };
  const prev = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(images.length - 1);
    }
  };
  return (
    <div>
      <Container>
        {loading ? (
          <SpinnerDiv>
            <Spinner
              animation='border'
              variant='success'
              style={{ width: "80px", height: "80px" }}
            />
          </SpinnerDiv>
        ) : (
          <Rows>
            <Grids>
              <Image>
                <ImageRow>
                  {images !== undefined &&
                    images.map((image: string, i: number) => (
                      <ImageCard
                        key={image}
                        onClick={() => handleImageSelection(i)}
                      >
                        <img src={image} alt='images card' width='100%' />
                      </ImageCard>
                    ))}
                </ImageRow>
                <div style={{ position: "relative" }}>
                  <img src={images[index]} alt='product image' width='100%' />
                  <Icon
                    name='chevron left'
                    size='huge'
                    className='left'
                    onClick={prev}
                  />
                  <Icon
                    name='chevron right'
                    size='huge'
                    className='right'
                    onClick={next}
                  />
                </div>
              </Image>
              <Content>
                <H1>{product.title}</H1>
                <P>{product.description}</P>
                <P>$ {product.price}</P>
                <P>{product.location}</P>
                <Dropdown
                  placeholder='Guantity'
                  search
                  selection
                  options={quantityArray}
                />
                <Buttons className='buttons'>
                  <Label onClick={() => handleCart(product)}>
                    <Icon name='shopping basket' />
                  </Label>
                  <Label>
                    <Icon name='heart' />
                  </Label>
                </Buttons>
                <Rate>
                  <Rating icon='star' defaultRating={3} maxRating={5} />
                  <RateText>3.0</RateText>
                </Rate>
              </Content>
            </Grids>
          </Rows>
        )}
      </Container>
      <>
        <Header>
          <h1>You May Also Like This</h1>
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
                <CategoryCard
                  key={product.id}
                  product={product}
                  handleView={handleView}
                  handleCart={handleCart}
                />
              ))}
            </Grid>
          </Row>
        )}
      </>
    </div>
  );
};

export default SingleProduct;

export const Container = styled.div`
  padding: 3% 10%;

  @media (max-width: 1100px) {
    padding: 3% 5%;
  }
  @media (max-width: 800px) {
    padding: 3% 1em;
  }
`;
export const Rows = styled.div``;
export const Grids = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.div`
  max-height: 70vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 20% 80%;
  overflow-y: auto;
  grid-gap: 1em;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: orangered;
  }

  img {
    display: block;
    min-height: 100%;
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    color: orangered;
    cursor: pointer;
  }

  .right {
    right: 0em;
  }
  .left {
    left: 0em;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10%;
`;
export const H1 = styled.h1`
  padding-bottom: 0.5em;
  font-size: 3em;
  font-weight: 800;
`;
export const P = styled.p`
  padding-bottom: 0.3em;
  font-size: 1.2em;
`;

export const Buttons = styled.div`
  display: flex;
  padding: 1em 0;
`;
export const Rate = styled.div`
  display: flex;
  align-items: center;
  padding: 2em 0;
`;
export const RateText = styled.p`
  padding-left: 1em;
`;
export const ImageRow = styled.div`
  height: 100%;
`;
export const ImageCard = styled.div`
  margin-bottom: 0.5em;
  cursor: pointer;
`;
export const Label = styled.div`
  background: orange;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  line-height: 40px;
  margin-right: 1em;
  cursor: pointer;
`;
