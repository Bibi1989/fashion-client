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

export const Grid = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  padding: 2em;
  transition: all 1s ease-in-out;
  /* position: relative; */
  position: relative;
  overflow-x: auto;

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
    right: 0;
  }
  .prev {
    left: 0;
  }

  .active {
    animation: ${move} 1s infinite;
  }

  &::-webkit-scrollbar {
    height: 2px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: orange;
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Row = styled.div`
  padding: 3% 10%;
  .three {
    display: none;
  }

  .two {
    display: none;
  }
  .one {
    display: none;
  }

  @media (max-width: 1400px) {
    .four {
      display: none;
    }

    .three {
      display: grid;
    }

    .two {
      display: none;
    }
    .one {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    padding: 3% 5%;

    .four {
      display: none;
    }

    .three {
      display: grid;
    }

    .two {
      display: none;
    }
    .one {
      display: none;
    }
  }

  @media (max-width: 800px) {
    padding: 3% 5%;

    .four {
      display: none;
    }

    .three {
      display: none;
    }

    .two {
      display: grid;
    }
    .one {
      display: none;
    }
  }
  @media (max-width: 600px) {
    padding: 3% 0em;

    .four {
      display: none;
    }
    .three {
      display: none;
    }
    .two {
      display: none;
    }
    .one {
      display: grid;
    }
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
