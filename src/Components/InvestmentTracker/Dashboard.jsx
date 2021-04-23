import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VscCircleOutline } from "react-icons/vsc";

const Dashboard = () => {
  return (
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

const CapitalChangePercentage = styled.h2``;

const CapitalChangeFiat = styled.h2``;

export default Dashboard;
