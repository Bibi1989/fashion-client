import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 10% 0em 10%;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Li = styled.li`
  padding: 0.8em 1.5em;
  background: orangered;
  color: #ffffff;
  border-radius: 30px;

  cursor: pointer;

  &.active {
    border-bottom: 1px solid #999999;
  }
`;
