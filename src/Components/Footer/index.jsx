import React from "react";
import styled from "styled-components";
import NewsLetter from "./NewsLetter";
import SocialFollow from "./SocialFollow";

const Footer = () => {
  return (
    <Wrapper>
      <SocialIconsWrapper>
        <SocialFollow />
      </SocialIconsWrapper>
      <NewsLetter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: #ff9906 solid 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  min-height: 10vh;
`;

const SocialIconsWrapper = styled.div``;

export default Footer;
