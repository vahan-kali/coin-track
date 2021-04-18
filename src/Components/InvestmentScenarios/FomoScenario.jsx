import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FomoScenario = () => {
  return (
    <Wrapper>
      <Scenario>
        If you had bought 50$ of ETH at 2017/09/03, youd have 3500$ today
      </Scenario>
      <ReturnButton exact to="/investmentScenarios">
        Return
      </ReturnButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Scenario = styled.div``;

const ReturnButton = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    background: #ff9906;
  }
`;

export default FomoScenario;
