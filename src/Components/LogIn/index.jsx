import React from "react";
import styled from "styled-components";

const LogIn = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <LoginWrapper>
          <LogInGreeting>Log In To Track Your Crypto Investments</LogInGreeting>
          <SignInInput name="userName" placeholder="Your first name" />
          <SignInButton type="submit">Submit</SignInButton>
        </LoginWrapper>
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

const LoginWrapper = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LogInGreeting = styled.h2``;

const SignInInput = styled.input``;

const SignInButton = styled.button`
  background: #ff9906;
  color: white;
`;

export default LogIn;
