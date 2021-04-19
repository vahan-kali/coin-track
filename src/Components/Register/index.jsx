import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    fetch("/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        passwordConfirmation: e.target.confirmPassword.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 400) {
          alert(result.message);
        } else if (result.status === 201) {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <Wrapper>
      <BackgroundImage>
        <RegisterWrapper method="POST" onSubmit={handleRegisterFormSubmit}>
          <RegisterGreeting>
            Register to track your investments
          </RegisterGreeting>
          <RegsiterInput
            type="text"
            name="username"
            placeholder="Your username"
          />
          <RegsiterInput type="email" name="email" placeholder="Your email" />
          <RegsiterInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <RegsiterInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <RegisterButton type="submit">Submit</RegisterButton>
        </RegisterWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BackgroundImage = styled.div`
  background-image: url(https://mindmatters.ai/wp-content/uploads/sites/2/2020/10/crypto-currency-background-with-various-of-shiny-silver-and-golden-physical-cryptocurrencies-symbol-coins-bitcoin-ethereum-litecoin-zcash-ripple-stockpack-adobe-stock-1597x1065.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
`;

const RegisterWrapper = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RegisterGreeting = styled.h2`
  color: white;
  background: #ff9906;
`;

const RegsiterInput = styled.input``;

const RegisterButton = styled.button`
  background: #ff9906;
  color: white;
`;

export default Register;
