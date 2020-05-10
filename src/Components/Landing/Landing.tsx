import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const Landing = () => {
  const [index, setIndex] = React.useState<number>(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Row>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Col>
            <div className='image'>
              <img
                className='d-block w-100'
                src='./images/fashion.jpg'
                alt='First slide'
              />
            </div>
            <div className='content'>
              <h1>ERE PLACE</h1>
              <h3>A place for your wears</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus corporis fugiat voluptates recusandae similique
                illo.
              </p>
              <p className='rotate'>Lorem, ipsum dolor sit amet cons.</p>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col>
            <div className='image'>
              <img
                className='d-block w-100'
                src='./images/fashion12.jpg'
                alt='Second slide'
              />
            </div>
            <div className='content'>
              <h1>ERE PLACE</h1>
              <h3>A place for your wears</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus corporis fugiat voluptates recusandae similique
                illo.
              </p>
              <p className='rotate'>Lorem, ipsum dolor sit amet cons.</p>
            </div>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
          <Col>
            <div className='image'>
              <img
                className='d-block w-100'
                src='./images/fashion3.jpg'
                alt='Third slide'
              />
            </div>
            <div className='content'>
              <h1>ERE PLACE</h1>
              <h3>A place for your wears</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus corporis fugiat voluptates recusandae similique
                illo.
              </p>
              <p className='rotate'>Lorem, ipsum dolor sit amet cons.</p>
            </div>
          </Col>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default Landing;

export const Row = styled.div`
  height: 90vh;

  .image {
    width: 100%;
    height: 90vh;

    img {
      width: 100%;
    }
  }
`;

export const Col = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 90vh;
  min-height: 90vh;

  .content {
    color: #555555;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10em;

    h1 {
      font-weight: 900;
      font-size: 3.5em;
    }

    h3 {
      font-size: 3em;
      padding: 1em;
    }

    .rotate {
      transform: rotate(90deg) translateX(-50%);
      margin-left: -105%;
      font-size: 1.5em;
    }
  }

  /* @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  } */
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    .content {
      padding: 2em;
    }

    .image {
      display: none;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .content {
      padding: 2em;
    }
    .image {
      display: none;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .content {
      padding: 2em;
    }
    .image {
      display: none;
    }
  }
`;
