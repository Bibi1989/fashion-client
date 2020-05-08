import React, { useState } from "react";
import styled from "styled-components";
import { Button, Icon, Label, Input } from "semantic-ui-react";
import Wrapper from "../Commons/Wrapper";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navs = () => {
  return (
    <Container>
      <Row>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='light'
          variant='light'
          style={{ padding: "1em 10%", margin: "0 !important" }}
        >
          <Navbar.Brand href='#home'>
            <h2 style={{ fontWeight: "bolder", color: "orangered" }}>
              Ere Place
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Input loading placeholder='Search...' className='input' />
              <ShowCart>
                <Cart />
              </ShowCart>
              {true ? (
                <>
                  <Nav.Link href='#pricing' style={{ position: "relative" }}>
                    <Button className='btn_login'>Login</Button>
                  </Nav.Link>
                  <Nav.Link href='#pricing' style={{ position: "relative" }}>
                    <Button className='btn_register'>Register</Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href='#pricing' style={{ position: "relative" }}>
                    <Button className='btn_login'>Logout</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Navs;

const Cart = () => (
  <>
    <Nav.Link
      href='#features'
      style={{
        position: "relative",
        margin: "3px 0.5em",
      }}
    >
      <Icon name='heart' size='big' />
      <Label
        className='label'
        circular
        color='orange'
        style={{
          position: "absolute",
          top: "-10px",
          right: "-8px",
        }}
      >
        2
      </Label>
    </Nav.Link>
    <Nav.Link
      href='#pricing'
      style={{
        position: "relative",
        margin: "3px 0.5em",
      }}
    >
      <Icon name='shopping basket' size='big' />
      <Label
        className='label'
        circular
        color='orange'
        style={{
          position: "absolute",
          top: "-10px",
          right: "-5px",
        }}
      >
        2
      </Label>
    </Nav.Link>
  </>
);

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
