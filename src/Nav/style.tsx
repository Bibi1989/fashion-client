import styled from "styled-components";

export const Container = styled.div``;
export const Row = styled.div`
  .btn_login {
    margin-top: -5px;
    border-radius: 30px;
    background: orangered;
    color: #ffffff;
    padding: 1em 2.2em;
  }
  .btn_register {
    margin-top: -5px;
    border-radius: 30px;
    background: seagreen;
    color: #ffffff;
    padding: 1em 2.2em;
  }

  @media (max-width: 800px) {
    .btn_login {
      display: block;
      margin-top: -5px;
      border-radius: 30px;
      width: 100%;
      background: orangered;
      color: #ffffff;
      padding: 1em 2.2em;
    }
    .btn_register {
      margin-top: -5px;
      display: block;
      width: 100%;
      border-radius: 30px;
      background: seagreen;
      color: #ffffff;
      padding: 1em 2.2em;
    }

    .input {
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }
`;
export const MenuButton = styled.div`
  div {
    width: 28px;
    height: 4px;
  }
`;
export const ShowCart = styled.div`
  display: flex;
`;
export const Li = styled.li``;
