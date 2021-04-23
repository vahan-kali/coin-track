import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { GrAdd } from "react-icons/gr";
import Modal from "react-modal";
import Tracker from "./Tracker";
import Dashboard from "./Dashboard";

Modal.setAppElement("#root");

const InvestmentTracker = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [allCoins, setAllCoin] = useState([]);

  const [trackedCoins, setTrackedCoins] = useState([]);

  const [amountBeingTracked, setAmountBeingTracked] = useState(0);

  useEffect(() => {
    fetch("/cryptocurrencies/liveMarket")
      .then((data) => data.json())
      .then((response) => setAllCoin(response.data, "coinsssss"));

    fetch("/user/getTrackedCoins", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        usertoken: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => setTrackedCoins(result.data));
  }, []);

  const trackerFormHandler = async (e) => {
    e.preventDefault();

    await fetch("/user/storeTrackedCoin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin: e.target.coin.value,
        amountBought: e.target.amountUsd.value,
        marketPrice: e.target.marketPrice.value,
        userToken: localStorage.getItem("token"),
      }),
    });
    // setAmountBeingTracked(e.target.amountUsd.value + amountBeingTracked);
  };

  return (
    <Wrapper>
      <Dashboard />

      <FilterWrapper>
        <CoinFilter>Coin</CoinFilter>
        <AmountFilter>Amount Invested(USD)</AmountFilter>
        <PositionEquity>Position Equity(USD)</PositionEquity>
        <Pnl>Pnl(USD)</Pnl>
      </FilterWrapper>
      {Object.entries(trackedCoins).map((coin) => {
        console.log(coin);
        return <Tracker coin={coin} />;
      })}

      <AddNewTrackerButton onClick={() => setModalIsOpen(true)}>
        <GrAdd />
      </AddNewTrackerButton>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Form onSubmit={trackerFormHandler}>
          <FormWrapper>
            <ChooseCoinWrapper>
              <label for="coins">Track a coin:</label>{" "}
              <select id="coins" name="coin">
                {allCoins.map((coin) => {
                  return <option value={coin.id}>{coin.name}</option>;
                })}
              </select>
            </ChooseCoinWrapper>
            <AmountWrapper>
              <label for="amount">Amount Sold or Bought USD:</label>{" "}
              <input id="amount" name="amountUsd" type="number" />
            </AmountWrapper>
            <MarketPriceBoughtOrSoldAtWrapper>
              <label for="marketPrice">Market price bought or sold at:</label>{" "}
              <input
                id="marketPrice"
                name="marketPrice"
                type="number"
                step="any"
              />
            </MarketPriceBoughtOrSoldAtWrapper>
            <TrackButtonWrapper>
              <button type="submit">Set Tracker</button>
            </TrackButtonWrapper>
          </FormWrapper>
        </Form>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MarketPriceBoughtOrSoldAtWrapper = styled.div``;

const AmountWrapper = styled.div`
  margin: 10px;
`;

const TrackButtonWrapper = styled.div`
  margin: 10px;
`;

const ChooseCoinWrapper = styled.div`
  margin: 10px;
`;

const CoinFilter = styled.p`
  display: flex;
  align-items: center;
`;
const AmountFilter = styled.p`
  display: flex;
  align-items: center;
`;
const PositionEquity = styled.p`
  display: flex;
  align-items: center;
`;
const Pnl = styled.p`
  display: flex;
  align-items: center;
`;

const FilterWrapper = styled.div`
  border-top: 1px #ff9906 solid;
  border-bottom: 1px #ff9906 solid;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 20px;
`;

const Form = styled.form``;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddNewTrackerButton = styled.button`
  height: 25px;
  max-width: 100px;
  align-items: flex-start;
  border-radius: 50px;
  background: #ff9906;
  margin: 10px;
  outline: none;
`;

export default InvestmentTracker;
