import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "semantic-ui-react";

let products = [
  "./images/fashion.jpg",
  "./images/fashion3.jpg",
  "./images/fashion5.jpg",
  "./images/fashion3.jpg",
  "./images/fashion5.jpg",
  "./images/fashion.jpg",
  "./images/fashion5.jpg",
  "./images/fashion3.jpg",
  "./images/fashion.jpg",
];

const Slick = () => {
  const [index, setIndex] = useState(0);
  //   products = products.slice(index, index + 3);

  const handlePrev = () => {
    setIndex((c) => (c -= 3));
    // if (index <= 0) {
    //   setIndex(-3 + products.length);
    // }
  };
  const handleNext = () => {
    setIndex((c) => (c += 3));
    // if (index > products.length - 4) {
    //   setIndex(0);
    // }
  };
  console.log(index);

  return (
    <Slider>
      <Image>
        {products.slice(index, index + 3).map((image) => (
          <img src={image} />
        ))}
      </Image>
      <Icon
        disabled={index <= 0 && true}
        className={index <= 0 ? "prev" : "prev active"}
        name='chevron left'
        size='big'
        color='grey'
        onClick={handlePrev}
      />
      <Icon
        disabled={index > products.length - 4 && true}
        className='next'
        name='chevron right'
        size='big'
        color='grey'
        onClick={handleNext}
      />
    </Slider>
  );
};
export default Slick;

const move = keyframes`
    0%{
        transform: translate(0px, 0px);
    }
    50%{
        transform: translate(10px, 0px);
    }
    100%{
        transform: translate(0px, 0px);
    }
`;

const Slider = styled.div`
  width: 100%;
  padding: 2% 10%;
  position: relative;

  .prev,
  .next {
    width: 40px;
    height: 40px;
    background: white;
    border: 0.3px solid #ddd;
    box-shadow: 0 2px 10px #eee;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .next {
    right: calc(10% + (-20px));
  }
  .prev {
    left: calc(10% + (-20px));
  }

  .active {
    animation: ${move} 1s infinite;
  }
`;
const Image = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  height: 400px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }

  img {
    margin-right: 1em;
    width: 100%;
    height: 100%;
  }
`;
