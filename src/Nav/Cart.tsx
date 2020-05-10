import React from "react";
import { Icon, Label } from "semantic-ui-react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cart = ({ fashion }: any) => (
  <>
    <Nav.Link
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
      style={{
        position: "relative",
        margin: "3px 0.5em",
      }}
    >
      <Link to='/cart' style={{ color: "#777777", textDecoration: "none" }}>
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
          {JSON.parse(fashion) !== null ? JSON.parse(fashion).length : 0}
        </Label>
      </Link>
    </Nav.Link>
  </>
);
