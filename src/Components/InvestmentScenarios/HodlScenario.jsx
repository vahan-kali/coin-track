import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HodlScenario = () => {
  return (
    <Wrapper>
      <Scenario>
        If you were to hold 50$ worth of ETH until the price per coin reached
        3000$, youre position would be worth 950$
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
  text-decoration: none;
  &:hover {
    background: #ff9906;
  }
`;

export default HodlScenario;
