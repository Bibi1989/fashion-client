import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Wrapper;

const Container = styled.div`
  padding: 0 10%;

  @media (max-width: 1100px) {
    padding: 0 1em;
  }
  @media (max-width: 769px) {
    padding: 0 1em;
  }
`;
