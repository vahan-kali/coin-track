import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HodlScenario = () => {
  const [hodlResult, setHodlResult] = useState(0);

  const [currentPrice, setCurrentPrice] = useState(0);

  const [target, setTarget] = useState(undefined);

  useEffect(() => {
    if (target) {
      //make sure hodlAmountUsd and hodlTargetPrice are numbers and set them to a variable
      const hodlAmountUsd = Number(target.amountUsd.value);
      const hodlTargetPrice = Number(target.priceTarget.value);

      console.log(
        hodlAmountUsd,
        "hodl amount usd",
        hodlTargetPrice,
        "hodl target price",
        currentPrice,
        "current price of coin"
      );
      // calculate position worth(hodl result)

      const calculation = ((hodlAmountUsd / currentPrice) * hodlTargetPrice)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setHodlResult(calculation);
    }
  }, [target]);

  const handleOnSubmitHodl = (e) => {
    e.preventDefault();

    fetch(
      `/cryptocurrencies/liveCoinData/${e.target.hodlCoin.value.toLowerCase()}`
    )
      .then((data) => data.json())
      .then((response) => {
        console.log(e.target.hodlCoin.value.toLowerCase(), "lower case");
        console.log(response.data.market_data.current_price.usd);
        setCurrentPrice(response.data.market_data.current_price.usd);
        setTarget(e.target);
      });
  };

  return (
    <Wrapper>
      <Scenario>
        <Form onSubmit={handleOnSubmitHodl}>
          <Section1>
            If you were to HODL{" "}
            <ScenarioInput
              name="amountUsd"
              placeholder="Amount HODL-ing in USD"
            />{" "}
            $ worth of{" "}
          </Section1>
          <Section2>
            <ScenarioInput
              name="hodlCoin"
              placeholder="Name Of Coin (format: bitcoin, litecoin, etc..)"
            />{" "}
            until the price per coin reached{" "}
          </Section2>
          <Section3>
            <ScenarioInput
              name="priceTarget"
              placeholder="Your Price Target In USD (format: 100, etc..)"
            />
            $ , your position would be worth {hodlResult} $
          </Section3>
          <CalculateHodlButton type="submit">Calculate</CalculateHodlButton>{" "}
          <NewScenerio type="button" onClick={() => window.location.reload()}>
            New Scenario
          </NewScenerio>
        </Form>
      </Scenario>
      <ReturnButton exact to="/investmentScenarios">
        Return
      </ReturnButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Scenario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScenarioInput = styled.input`
  width: 275px;
`;

const Section1 = styled.div`
  margin: 5px;
`;

const Section2 = styled.div`
  margin: 5px;
`;

const Section3 = styled.div`
  margin: 5px;
`;

const Form = styled.form``;

const CalculateHodlButton = styled.button``;

const ReturnButton = styled(Link)`
  color: #ff9906;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid grey;
  }
`;

const NewScenerio = styled.button``;

export default HodlScenario;
