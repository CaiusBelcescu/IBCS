import React from "react";
import axios from "axios";
import { register } from "../redux/apiCalls";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useRef } from "react";
//import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/artificial-green-moss-wall-for-garden-decor-moss-background-texture-picture-https://media.istockphoto.com/photos/beautiful-bright-green-moss-grown-up-cover-the-rough-stones-and-on-picture-id1137735594?b=1&k=20&m=1137735594&s=170667a&w=0&h=2dFM0UtErvjpz1MThst5sSQlpvbFRkmBnEtsgddTaMw=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f77fcf;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current !== password.current) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      register(dispatch, { username, email, password });
      navigate("/login");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleClick}>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            placeholder="confirm password"
            required
            onChange={(e) => setPasswordAgain(e.target.value)}
            type="password"
          />
          <Agreement>
            <b>
              By creating an account, I consent to the processing of my personal
              data in accordance with the PRIVACY POLICY
            </b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
