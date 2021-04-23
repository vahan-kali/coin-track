import React from "react";
import styled from "styled-components";

const EmailAlert = () => {
  return (
    <Wrapper>
      <SpeechBubbleWrapper>
        <CartoonSpeech>
          Just tell me what coin you want me to keep an eye on and tell me your
          target price and I shall send you an email notification once your
          price hits
        </CartoonSpeech>
        <Form>
          <CoinTickerLabel for="ticker">Ticker:</CoinTickerLabel>
          <CoinTicker id="ticker"></CoinTicker>
          <PriceTargetLabel for="price-target">Price Target:</PriceTargetLabel>
          <PriceTarget id="price-target"></PriceTarget>
          <EmailLabel for="email-label">Email:</EmailLabel>
          <Email id="email-label"></Email>

          <AlertButton>Set Alert</AlertButton>
        </Form>
      </SpeechBubbleWrapper>
      <Cartoon src={"/btcCartoon.png"} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SpeechBubbleWrapper = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 24px;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  border: #ff9906 2px solid;
  width: 75vw;
  height: 275px;
  left: 150px;
  color: #ff9906;
  font-weight: bolder;

  &:before {
    content: "";
    width: 10px;
    height: 0px;
    position: absolute;
    border-left: 20px solid;
    border-right: 20px solid transparent;
    border-top: 20px solid;
    border-bottom: 20px solid transparent;
    left: 35px;
    top: 273px;
  }
`;

const Cartoon = styled.img`
  width: 200px;
`;

const CartoonSpeech = styled.p``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoinTicker = styled.input``;

const PriceTarget = styled.input``;

const Email = styled.input``;

const AlertButton = styled.button`
  background: #ff9906;
  color: white;
  margin-top: 10px;
  padding: 5px;
  border-radius: 20px;
`;

const CoinTickerLabel = styled.label``;

const PriceTargetLabel = styled.label``;

const EmailLabel = styled.label``;

export default EmailAlert;
