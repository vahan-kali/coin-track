import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import HodlScenario from "./HodlScenario";
import FomoScenerio from "./FomoScenario";
import { AiOutlineInfoCircle } from "react-icons/ai";

const InvestmentScenarios = () => {
  return (
    <Wrapper>
      <SpeechBubbleWrapper>
        <CartoonSpeech>
          {window.location.pathname === "/investmentScenarios" &&
            " What type of scenerio do you want me to assess?"}
          {window.location.pathname === "/investmentScenarios" && (
            <FomoWrapper exact to="/investmentScenarios/fomoScenario">
              FOMO Scenerio
              <AiOutlineInfoCircle />
            </FomoWrapper>
          )}
          {window.location.pathname === "/investmentScenarios" && (
            <HodlWrapper exact to="/investmentScenarios/hodlScenario">
              HODL Scenerio
            </HodlWrapper>
          )}

          {window.location.pathname === "/investmentScenarios/fomoScenario" && (
            <FomoScenerio />
          )}
          {window.location.pathname === "/investmentScenarios/hodlScenario" && (
            <HodlScenario />
          )}
        </CartoonSpeech>
      </SpeechBubbleWrapper>
      <Cartoon src={"/btcCartoon.png"} alt="bitcoin cartoon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 25px;
`;

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

const CartoonSpeech = styled.p`
  display: flex;
  flex-direction: column;
`;

const FomoWrapper = styled(Link)`
  text-decoration: none;
  color: black;
`;

const HodlWrapper = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default InvestmentScenarios;
