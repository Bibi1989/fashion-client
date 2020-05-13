import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <Image>
          <img src='./images/pagenotfound.jpg' alt='page not found' />
        </Image>
        <Buttons onClick={() => history.push("/login")}>Go Back</Buttons>
      </Content>
    </Container>
  );
};

export default PageNotFound;

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 50%;
  height: 50%;
`;
const Image = styled.div`
  img {
    width: 100%;
  }
`;

const Buttons = styled(Button)`
  display: inline-block !important;
  margin-top: 1em !important;
  margin-left: auto !important;
  margin-right: auto !important;
`;
