import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tools from "./Tools";
import EmailAlert from "./EmailAlert";

import HeroBanner from "./heroBanner";

const HomePage = ({ darkMode }) => {
  return (
    <Wrapper>
      <HeroBanner darkImage={darkMode} />
      <Tools />
      <EmailAlert />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
