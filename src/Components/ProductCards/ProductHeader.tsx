import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, SpinnerDiv, Header, Ul, Li } from "./CommonProductStyle";

const ProductHeader = ({
  showActive,
  fetchProducts,
  dispatch,
  setShowActive,
  title,
  link,
  handleView,
}: any) => {
  return (
    <Header>
      <h2>{title}</h2>
      <Ul>
        <Link to={`/${link}`} style={{ color: "#777", textDecoration: "none" }}>
          <Li className={showActive.all ? "active" : ""} onClick={handleView}>
            View All
          </Li>
        </Link>
      </Ul>
    </Header>
  );
};

export default ProductHeader;
