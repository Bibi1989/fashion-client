import styled from "styled-components";

export const Div = styled.div`
  margin-top: 10%;
  flex-shrink: 0;

  .copy-right {
    background-color: #f2711c;
    text-align: center;
    padding: 0.4em 0;
    border-top: 1px solid #999;
  }
`;

export const Footers = styled.div`
  background-color: #f2711c;
  color: #eee;
  /* background-color: #010024; */
  /* margin-top: 10em; */
  padding: 3% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    .social-icons {
      flex-direction: column;
    }

    .suscribe {
      display: none;
      margin-top: 1em;

      input {
        width: 0;
      }
    }
  }

  .customer {
    .social-icons {
      display: flex;
    }

    .suscribe {
      margin-top: 1em;

      input {
        width: 100%;
      }
    }

    .payment {
      padding: 0.5em 0;
      font-size: 3.5em;

      i {
        margin: 0 0.1em;
      }
    }
  }
`;
