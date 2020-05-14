import styled, { keyframes } from "styled-components";

const point = keyframes`
    0%{
        transform: translateX(50%);
    }
    50%{
        transform: translateX(-50%);
    }
    100%{
        transform: translateX(50%);
    }
`;

export const Grid = styled.div`
  display: flex;
  grid-gap: 2.5em;
  padding: 1em;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 2px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
  }
`;

export const Row = styled.div`
  padding: 3% 10%;
  position: relative;

  @media (max-width: 1400px) {
  }
  @media (max-width: 1000px) {
    padding: 3% 5%;
  }
  @media (max-width: 800px) {
    padding: 3% 5%;
  }
  @media (max-width: 600px) {
    padding: 3% 1em;
  }
`;
export const SpinnerDiv = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  padding: 0.8em;

  cursor: pointer;

  &.active {
    border-bottom: 1px solid #999999;
  }
`;

export const ArrowPointer = styled.p`
  font-size: 2em;
  position: absolute;
  top: 50%;
  right: 11%;
  color: orangered;
  /* transform: translateY(-50%); */
  animation: ${point} 1s infinite;
`;
