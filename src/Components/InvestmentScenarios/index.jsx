import React, { useState } from "react";
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
          {window.location.pathname === "/investmentScenarios" && (
            <ScenarioTitle>
              What type of scenerio do you want me to assess?
            </ScenarioTitle>
          )}
          {window.location.pathname === "/investmentScenarios" && (
            <FomoWrapper>
              <ScenarioTypeTitle exact to="/investmentScenarios/fomoScenario">
                FOMO Scenerio
              </ScenarioTypeTitle>
            </FomoWrapper>
          )}
          {window.location.pathname === "/investmentScenarios" && (
            <HodlWrapper>
              <ScenarioTypeTitle exact to="/investmentScenarios/hodlScenario">
                HODL Scenerio
              </ScenarioTypeTitle>
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

const ScenarioTitle = styled.h1`
  font-size: 35px;
`;
const Cartoon = styled.img`
  width: 200px;
`;

const CartoonSpeech = styled.p`
  display: flex;
  flex-direction: column;
`;
const ScenarioTypeTitle = styled(Link)`
  margin-right: 5px;
  text-decoration: none;
  font-size: 25px;
  color: #ff9906;
  margin-top: 10px;
  &:hover {
    border-bottom: 1px solid grey;
  }
`;

const FomoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const HodlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export default InvestmentScenarios;
