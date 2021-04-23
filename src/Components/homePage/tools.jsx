import React from "react";
import styled from "styled-components";
import { RiStockFill } from "react-icons/ri";
import { CgTrack } from "react-icons/cg";
import { GiChoice } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const Tools = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <ToolsTitle>Coin Track Tools</ToolsTitle>
      <ToolsWrapper>
        <LiveMarket>
          <RiStockFill
            style={{ fontSize: "100px" }}
            onClick={() => history.push("/liveMarket")}
          />
          <Description>Check Real Time Live Crypto Market Data</Description>
        </LiveMarket>
        <Track onClick={() => history.push("/investmentTracker")}>
          <CgTrack style={{ fontSize: "100px" }} />
          <Description>Track Your Investments</Description>
        </Track>
        <Scenerio onClick={() => history.push("/investmentScenarios")}>
          <GiChoice style={{ fontSize: "100px" }} />
          <Description>Create Investments Scenarios</Description>
        </Scenerio>
      </ToolsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  flex: 1;
`;

const LiveMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: calc(100 / 3);
  max-width: auto;
  height: 250px;
  justify-content: center;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    background: #ff9906;
    border-radius: 200px;
    transform: scale(1.25);
  }
`;

const ToolsTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  color: #ff9906;
  padding: 50px;
`;

const ToolsWrapper = styled.div`
  display: flex;
`;

const Track = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: calc(100 / 3);
  height: 250px;
  justify-content: center;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    background: #ff9906;
    border-radius: 200px;
    transform: scale(1.25);
  }
`;

const Scenerio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: calc(100 / 3);
  height: 250px;
  justify-content: center;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    background: #ff9906;
    border-radius: 200px;
    transform: scale(1.25);
  }
`;

const Description = styled.p`
  text-align: center;
  font-weight: bolder;
`;

export default Tools;
