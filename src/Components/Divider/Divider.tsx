import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const men_background = "./images/fashion5.jpg";
const women_background = "./images/fashion7.jpg";

const Divider = ({ name }: string | any) => {
  return (
    <>
      {name.toLowerCase() === "men" ? (
        <Container>
          <Link to={`/${name.toLowerCase()}`}>
            <Button>Shop For {name}</Button>
          </Link>
        </Container>
      ) : (
        <Container1>
          <Link to={`/${name.toLowerCase()}`}>
            <Button>Shop For {name}</Button>
          </Link>
        </Container1>
      )}
    </>
  );
};

export default Divider;

export const Container = styled.div`
  height: 300px;
  max-width: 80%;
  margin: auto;
  border-radius: 0.6em;
  background: url(${men_background});
  background-repeat: no-repeat;
  background-size: cover;
  /* background: rgba(255, 68, 0, 0.877); */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container1 = styled.div`
  height: 300px;
  max-width: 80%;
  margin: auto;
  border-radius: 0.6em;
  background: url(${women_background});
  background-repeat: no-repeat;
  background-size: cover;
  /* background: rgba(255, 68, 0, 0.877); */
  display: flex;
  justify-content: center;
  align-items: center;
`;
