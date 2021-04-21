import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VscCircleOutline } from "react-icons/vsc";
import { GrAdd } from "react-icons/gr";
import Modal from "react-modal";

Modal.setAppElement("#root");

const InvestmentTracker = () => {
  const [priceChange, setPriceChange] = useState(" ");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("/cryptocurrencies/liveMarket")
      .then((data) => data.json())
      .then((response) => setCoins(response.data));
  });

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());

  return (
    <Wrapper>
      <PnlDashboardWrapper>
        <PnlDashboard>
          <TotalAmountInvested>10 000$</TotalAmountInvested>
          <CapitalChangeWrapper>
            <CapitalChangePercentage>5%</CapitalChangePercentage>
            <VscCircleOutline />
            <CapitalChangeFiat>34</CapitalChangeFiat>$
          </CapitalChangeWrapper>
        </PnlDashboard>
      </PnlDashboardWrapper>
      <AddNewTrackerButton onClick={() => setModalIsOpen(true)}>
        <GrAdd />
      </AddNewTrackerButton>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Form>
          <FormWrapper>
            <OrderTypeWrapper>
              <input type="radio" id="buy" name="orderType" value="buy" />
              <label for="buy">Buy</label>
              <input type="radio" id="sell" name="orderType" value="sell" />
              <label for="buy">Sell</label>
            </OrderTypeWrapper>
            <ChooseCoinWrapper>
              <label for="coins">Track a coin:</label>{" "}
              <select id="coins" name="coin">
                <option value="bitcoin">Bitcoin</option>
                <option value="Litecoin">Litecoin</option>
              </select>
            </ChooseCoinWrapper>
            <AmountWrapper>
              <label for="amount">Amount Sold or Bought:</label>{" "}
              <input id="amount" type="number" />
            </AmountWrapper>
            <MarketPriceBoughtOrSoldAtWrapper>
              <label for="marketPrice">Market price bought or sold at:</label>{" "}
              <input id="marketPrice" type="number" />
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

const PnlDashboardWrapper = styled.div`
  padding: 50px;
  background: linear-gradient(0deg, green 0%, rgba(0, 0, 0, 0) 90%);
  display: flex;
`;

const MarketPriceBoughtOrSoldAtWrapper = styled.div``;

const AmountWrapper = styled.div`
  margin: 10px;
`;

const TrackButtonWrapper = styled.div`
  margin: 10px;
`;

const OrderTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const ChooseCoinWrapper = styled.div`
  margin: 10px;
`;

const PnlDashboard = styled.div`
  border: #ff9906 2px solid;
`;

const TotalAmountInvested = styled.h2`
  margin: 10px;
`;

const CapitalChangeWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const CapitalChangePercentage = styled.h2``;

const CapitalChangeFiat = styled.h2``;

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
