import React from "react";
import styled from "styled-components";

const Forms = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Forms;

export const Container = styled.div`
  max-width: 70%;
  margin: 2% auto;
  border: 0.5px solid #ccc;
  border-radius: 0.3em;
  box-shadow: 0px 2px 15px #eee;
  padding: 1em;
`;
