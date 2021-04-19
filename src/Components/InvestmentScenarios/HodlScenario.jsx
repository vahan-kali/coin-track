import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HodlScenario = () => {
  const [hodlResult, setHodlResult] = useState(0);

  const [hodlCoin, setHodlCoin] = useState("");

  const [hodlDate, setHodlDate] = useState("");

  return (
    <Wrapper>
      <Scenario>
        If you were to hold <input placeholder="amount hodl-ing in usd"></input>{" "}
        worth of <input placeholder="name of coin (e.g: btc, eth)"></input>{" "}
        until the price per coin reached{" "}
        <input placeholder="your price target"></input>, your position would be
        worth {hodlResult}$
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
  color: #ff9906;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid grey;
  }
`;

export default HodlScenario;
