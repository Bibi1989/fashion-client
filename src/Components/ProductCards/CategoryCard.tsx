import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ product, handleView, handleCart }: any) => {
  return (
    <Row>
      <Image>
        <img src={JSON.parse(product.image_url)[0]} alt='product images' />
        <Buttons className='buttons'>
          <Label
            background='orange'
            color='white'
            size='1.5em'
            onClick={() => handleCart(product)}
          >
            <Icon name='shopping basket' />
          </Label>
          <Label background='orange' color='white' size='1.5em'>
            <Icon name='heart' />
          </Label>
          <Link to={`/product/${product.id}`}>
            <Label
              background='orange'
              color='white'
              size='1.5em'
              onClick={handleView}
            >
              <Icon name='info' />
            </Label>
          </Link>
        </Buttons>
      </Image>
      <Detail>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
        <p>{product.location}</p>
      </Detail>
    </Row>
  );
};

export default CategoryCard;

export const Row = styled.div`
  /* margin-right: 1.5em; */
  box-shadow: 0 2px 15px #dddddd;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 2px 2px #dddddd;
  }
`;
export const Buttons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1em;
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.8s ease-in-out;
`;

export const Image = styled.div`
  height: 25em;
  width: 100%;
  background: teal;
  position: relative;
  overflow: hidden;

  &:hover .buttons {
    opacity: 1;
    pointer-events: visible;
  }

  img {
    width: 100%;
    min-height: 100%;
    transform: scale(1);
    transition: all 0.8s ease;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(255, 166, 0, 0.519);
    }
  }
`;
export const Detail = styled.div`
  height: 7em;
  background-color: #f9fbfc;
  padding: 1em;

  p {
    margin: 0;
  }
`;

export const Label = styled.div<{
  background?: string;
  color?: string;
  size?: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ background }) => (background ? background : "orangered")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ size }) => (size ? size : "1em")};
  text-align: center;
  line-height: 40px;
  padding: 0;
  margin: 0 0.5em;
`;
