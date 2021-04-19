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

  const [fomoAmountUsd, setFomoAmountUsd] = useState(0);

  const [fomoAmountCoin, setFomoAmountCoin] = useState(0);

  const [fomoPrice, setFomoPrice] = useState(0);

  const [fomoCoin, setFomoCoin] = useState("");

  const [fomoDate, setFomoDate] = useState("");

  useEffect(() => {
    fetch(`/cryptocurrencies/coinHistory/${fomoCoin}/${fomoDate}`)
      .then((data) => data.json())
      .then((response) =>
        setFomoPrice(response.data.market_data.current_price.usd)
      );
    fetch(`/cryptocurrencies/liveCoinData/${fomoCoin}`)
      .then((data) => data.json())
      .then((response) =>
        setCurrentPrice(response.data.market_data.current_price.usd)
      );
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.coinInput.value, "coin");
    setFomoCoin(e.target.coinInput.value);

    console.log(e.target.dateInput.value, "date");
    setFomoDate(e.target.dateInput.value);

    setFomoAmountUsd(e.target.amountInput.value);
    console.log(fomoPrice, "price bought at");
    console.log(fomoAmountUsd, "amount bought usd");
    setFomoAmountCoin(fomoAmountUsd / fomoPrice);
    console.log(currentPrice, "current price,s");
    console.log(fomoAmountCoin, "amount bought in coins");
    setFomoResult(currentPrice * fomoAmountCoin);
  };

  return (
    <Wrapper>
      <Scenario>
        <Form onSubmit={handleFormSubmit}>
          If you had bought{" "}
          <input
            type="number"
            name="amountInput"
            placeholder="enter amount bought in usd"
          />{" "}
          of{" "}
          <input name="coinInput" placeholder="name of coin (e.g: btc, eth)" />{" "}
          at <input name="dateInput" placeholder="enter date bought at" />, youd
          have{" "}
          <CalculateFomoButton type="submit">Calculate</CalculateFomoButton>{" "}
          {fomoResult}
          today
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

const Scenario = styled.div``;

const CalculateFomoButton = styled.button``;

const ReturnButton = styled(Link)`
  color: #ff9906;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid grey;
  }
`;

export default FomoScenario;
