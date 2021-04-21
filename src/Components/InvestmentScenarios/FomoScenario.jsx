import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FomoScenario = () => {
  let today = new Date();

  const dd = String(today.getDate()).padStart(2, "0");

  const mm = String(today.getMonth() + 1).padStart(2, "0");

  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const [fomoResult, setFomoResult] = useState(0);

  const [currentPrice, setCurrentPrice] = useState(0);

  const [fomoPrice, setFomoPrice] = useState(0);

  const [target, setTarget] = useState(undefined);

  useEffect(() => {
    if (target) {
      const fomoAmountUsd = Number(target.amountInput.value);
      const fp = Number(fomoPrice);
      // //setting fomo coin
      // console.log(target.coinInput.value, "coin");

      // // setting fomo date
      // console.log(target.dateInput.value, "date");

      console.log(fp, "price bought at");

      // setting fomo amount in usd
      console.log(target.amountInput.value, "amount bought usd");

      //calculate fomo amount in coin
      console.log(fomoAmountUsd / fp, "fomo amount in coin");

      console.log(currentPrice, "current price of fomo coin");

      // console.log(currentPrice, fomoAmountCoin, "result checking");

      // //calculate fomo result
      // console.log(currentPrice * fomoAmountCoin, "fomo result");
      console.log(fomoAmountUsd, fp, "checking result ");
      const calculation = (currentPrice * (fomoAmountUsd / fp))
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setFomoResult(calculation);
    }
  }, [target]);

  const handleFormSubmitFomo = (e) => {
    e.preventDefault();
    fetch(
      `/cryptocurrencies/coinHistory/${e.target.coinInput.value}/${e.target.dateInput.value}`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res.data.market_data.current_price.usd, "fomo price");
        setFomoPrice(res.data.market_data.current_price.usd);

        fetch(`/cryptocurrencies/liveCoinData/${e.target.coinInput.value}`)
          .then((data) => data.json())
          .then((response) => {
            console.log(
              response.data.market_data.current_price.usd,
              "current price"
            );
            setCurrentPrice(response.data.market_data.current_price.usd);
            setTarget(e.target);
          });
      });
  };

  return (
    <Wrapper>
      <Scenario>
        <Form onSubmit={handleFormSubmitFomo}>
          <Section1>
            If you had bought{" "}
            <ScenarioInput
              type="number"
              name="amountInput"
              placeholder="Enter Amount Bought In USD"
            />{" "}
            $ of{" "}
            <ScenarioInput
              name="coinInput"
              placeholder="Name Of Coin (format: bitcoin, litecoin, etc..)"
            />{" "}
            at{" "}
            <ScenarioInput
              name="dateInput"
              placeholder="Date Bought at (format : dd-mm-yyyy eg. 30-12-2017)"
            />
            ,
          </Section1>
          <Section2>youd have {fomoResult} today</Section2>
          <ButtonsWrapper>
            <CalculateFomoButton type="submit">Calculate</CalculateFomoButton>{" "}
            <NewScenerio type="button" onClick={() => window.location.reload()}>
              New Scenario
            </NewScenerio>
          </ButtonsWrapper>
        </Form>
      </Scenario>

      <ReturnButton exact to="/investmentScenarios">
        Return
      </ReturnButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Form = styled.form``;

const ButtonsWrapper = styled.div``;

const Scenario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section1 = styled.div`
  margin: 5px;
`;

const Section2 = styled.div`
  margin: 5px;
`;

const CalculateFomoButton = styled.button``;

const ScenarioInput = styled.input`
  width: 350px;
`;

const NewScenerio = styled.button``;

const ReturnButton = styled(Link)`
  color: #ff9906;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid grey;
  }
`;

export default FomoScenario;
