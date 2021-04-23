import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faBitcoin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <Wrapper>
      <Icon href="https://twitter.com/?lang=en">
        <FontAwesomeIcon
          style={{ color: "#ff9906" }}
          icon={faTwitter}
          size="4x"
        />
      </Icon>
      <Icon href="https://discord.com/">
        <FontAwesomeIcon
          style={{ color: "#ff9906" }}
          icon={faDiscord}
          size="4x"
        />
      </Icon>
      <Icon href="https://www.binance.com/en">
        <FontAwesomeIcon
          style={{ color: "#ff9906" }}
          icon={faBitcoin}
          size="4x"
        />
      </Icon>
      <Icon href="https://telegram.org/">
        <FontAwesomeIcon
          style={{ color: "#ff9906" }}
          icon={faTelegram}
          size="4x"
        />
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5px;
`;

const Icon = styled.a`
  margin: 0px 25px;
`;
