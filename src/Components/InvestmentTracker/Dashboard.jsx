import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dashboard = ({ amountBeingTracked, totalPnl }) => {
  return (
    <PnlDashboardWrapper>
      <PnlDashboard>
        <TotalAmountInvested>{amountBeingTracked} $</TotalAmountInvested>
        <CapitalChangeWrapper>
          <CapitalChangeFiat>{totalPnl.toFixed(2)}</CapitalChangeFiat>$
        </CapitalChangeWrapper>
      </PnlDashboard>
    </PnlDashboardWrapper>
  );
};

const PnlDashboardWrapper = styled.div`
  padding: 50px;
  background: linear-gradient(0deg, green 0%, rgba(0, 0, 0, 0) 90%);
  display: flex;
  justify-content: center;
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

const CapitalChangeFiat = styled.h2``;

export default Dashboard;
