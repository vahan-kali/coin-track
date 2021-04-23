import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dashboard = ({ amountBeingTracked, totalPnl }) => {
  return (
    <PnlDashboardWrapper
      negative={totalPnl.toFixed(2) < 0}
      positive={totalPnl.toFixed(2) > 0}
      neutral={totalPnl.toFixed(2) === 0}
    >
      <PnlDashboard>
        <TotalAmountInvested>
          Total Amount Being Tracked(USD): {amountBeingTracked} $
        </TotalAmountInvested>
        <CapitalChangeWrapper>
          <CapitalChangeFiat>
            Cumulative PNL(USD): {totalPnl.toFixed(2)}
          </CapitalChangeFiat>
          $
        </CapitalChangeWrapper>
      </PnlDashboard>
    </PnlDashboardWrapper>
  );
};

const PnlDashboardWrapper = styled.div`
  padding: 50px;

  display: flex;
  justify-content: center;
  ${({ negative }) =>
    negative &&
    `
    background: linear-gradient(0deg, red 0%, rgba(0, 0, 0, 0) 90%);
`}
  ${({ positive }) =>
    positive &&
    `
    background: linear-gradient(0deg, green 0%, rgba(0, 0, 0, 0) 90%);
`}
  ${({ neutral }) =>
    neutral &&
    `
    background: background: linear-gradient(0deg, grey 0%, rgba(0, 0, 0, 0) 90%);
`}
`;

const PnlDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalAmountInvested = styled.h2`
  margin: 10px;
  font-size: 35px;
`;

const CapitalChangeWrapper = styled.div`
  display: flex;
  margin: 10px;
  font-size: 35px;
`;

const CapitalChangeFiat = styled.h2``;

export default Dashboard;
