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
import { LoginUser } from "../UserReducer/store";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { RegisterForm, H1, Labels, Errors, Buttons } from "./Register";

interface Users {
  email: string;
  password: string;
}

const Login = () => {
  const token: any = sessionStorage.getItem("ere_token");
  const [users, setUsers] = useState<Users>({
    email: "",
    password: "",
  });
  const history = useHistory();

  const errors = useSelector(({ users: { errors } }: any) => errors) || "";

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }: FormInputProps) => {
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
    LoginUser(dispatch, users, history);
  };

  if (token) {
    history.push("/");
  }
  return (
    <Forms>
      <H1>Login Here</H1>
      <RegisterForm onSubmit={onsubmit}>
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

        <Errors>
          <strong>{errors.error === "User exist" && "*" + errors.error}</strong>
        </Errors>

        <Buttons type='submit' color='orange'>
          Login
        </Buttons>
      </RegisterForm>
    </Forms>
  );
};

export default Login;
