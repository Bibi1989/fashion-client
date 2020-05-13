import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import Forms from "./Form";
import {
  Form,
  Label,
  Divider,
  Button,
  FormInputProps,
  Select,
  FormInput,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { RegisterUser } from "../UserReducer/store";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Users {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

const countryOptions = [
  { key: "s", value: "seller", text: "Seller" },
  { key: "n", value: "buyer", text: "Buyer" },
];

const Register = () => {
  const [users, setUsers] = useState<Users>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [select, setSelect] = useState("buyer");

  const errors = useSelector(({ users: { errors } }: any) => errors) || "";

  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = ({ target: { name, value } }: FormInputProps) => {
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleSelect = ({ target: { textContent } }: FormInputProps) => {
    setSelect(textContent.toLowerCase());
  };

  const userDetails = {
    ...users,
    is_seller: select,
  };

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    RegisterUser(dispatch, userDetails, history);
  };

  return (
    <Forms>
      <H1>Register Here</H1>
      <RegisterForm onSubmit={onsubmit}>
        <Form.Field>
          <Labels
            basic
            color='red'
            pointing='below'
            className={errors.error === "First name field is empty" && "error"}
          >
            <Errors>
              <p>
                {errors.error === "First name field is empty" &&
                  "*" + errors.error}
              </p>
            </Errors>
          </Labels>
          <input
            type='text'
            placeholder='First name'
            name='first_name'
            onChange={handleInput}
          />
        </Form.Field>
        <Divider />

        <Form.Field>
          <Labels
            basic
            color='red'
            pointing='below'
            className={errors.error === "Last name field is empty" && "error"}
          >
            <Errors>
              <p>
                {errors.error === "Last name field is empty" &&
                  "*" + errors.error}
              </p>
            </Errors>
          </Labels>
          <input
            type='text'
            placeholder='Last Name'
            name='last_name'
            onChange={handleInput}
          />
        </Form.Field>
        <Divider />
        <Form.Field>
          <Labels
            basic
            color='red'
            pointing='below'
            className={errors.error === "Email field is empty" && "error"}
          >
            <Errors>
              <p>
                {errors.error === "Email field is empty" && "*" + errors.error}
              </p>
            </Errors>
          </Labels>
          <input
            type='text'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
          />
        </Form.Field>
        <Divider />
        <Form.Field>
          <Labels
            basic
            color='red'
            pointing='below'
            className={
              errors.error === "Phone number field is empty" && "error"
            }
          >
            <Errors>
              <p>
                {errors.error === "Phone number field is empty" &&
                  "*" + errors.error}
              </p>
            </Errors>
          </Labels>
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            onChange={handleInput}
          />
        </Form.Field>
        <Divider />
        <Form.Field>
          <Labels
            basic
            color='red'
            pointing='below'
            className={errors.error === "Password field is empty" && "error"}
          >
            <Errors>
              <p>
                {errors.error === "Password field is empty" &&
                  "*" + errors.error}
              </p>
            </Errors>
          </Labels>
          <input
            type='text'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
        </Form.Field>
        <Divider />
        <Select
          placeholder='Buyer'
          onChange={handleSelect}
          options={countryOptions}
        />

        <Errors>
          <strong>{errors.error === "User exist" && "*" + errors.error}</strong>
        </Errors>

        <Buttons type='submit' color='orange'>
          Register
        </Buttons>
      </RegisterForm>
    </Forms>
  );
};

export default Register;

export const H1 = styled.h1`
  text-align: center;
  padding: 1em 0;
`;

export const RegisterForm = styled(Form)`
  .error {
    display: inline-block !important;
  }
`;

export const Labels = styled(Label)`
  display: none !important;
  margin-bottom: 0.5em !important;
  background: transparent !important;
`;

export const Buttons = styled(Button)`
  margin: 1em 0 !important;
  /* background: transparent !important;
  padding-left: 0 !important; */
`;

export const Errors = styled.div`
  p {
    color: red;
  }
  strong {
    color: red;
  }
`;
