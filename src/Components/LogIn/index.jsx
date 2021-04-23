import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const LogIn = ({ setToken }) => {
  const history = useHistory();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    fetch("/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 404 || result.status === 400) {
          alert(result.message);
        } else if (result.status === 200) {
          setToken(result.token);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <Wrapper>
      <BackgroundImage>
        <LoginWrapper method="post" onSubmit={handleLoginFormSubmit}>
          <LogInGreeting>Log In To Track Your Crypto Investments</LogInGreeting>
          <SignInInput type="email" name="email" placeholder="Your email" />
          <SignInInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <SignInButton type="submit">Submit</SignInButton>
          <RegisterButton to="/register">Register Here</RegisterButton>
        </LoginWrapper>
      </BackgroundImage>
    </Wrapper>
  );
};

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};

const Wrapper = styled.div``;

const BackgroundImage = styled.div`
  background-image: url(https://mindmatters.ai/wp-content/uploads/sites/2/2020/10/crypto-currency-background-with-various-of-shiny-silver-and-golden-physical-cryptocurrencies-symbol-coins-bitcoin-ethereum-litecoin-zcash-ripple-stockpack-adobe-stock-1597x1065.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
`;

const LoginWrapper = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LogInGreeting = styled.h2`
  color: white;
  background: #ff9906;
  padding: 10px;
`;

const RegisterButton = styled(Link)`
  text-decoration: none;
  background: white;
  text-align: center;
  font-size: 20px;
  padding: 5px;
`;

const SignInInput = styled.input`
  font-size: 20px;
`;

const SignInButton = styled.button`
  background: #ff9906;
  color: white;
  font-size: 20px;
`;

export default LogIn;
