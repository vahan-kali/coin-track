import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdTrackChanges } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Header = ({ lightMode, darkMode }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <Logo
        style={{ color: "#FF9906", "font-size": "30px" }}
        onClick={() => history.push("/")}
      >
        <MdTrackChanges />
      </Logo>
      <NavItems
        style={{
          color: "#FF9906",
          "font-size": "30px",
          justifyContent: "space-between",
        }}
      >
        <RiUserLine onClick={() => history.push("/logIn")} />
        <FiSun onClick={() => lightMode()} />
        <BiMoon onClick={() => darkMode()} />
        <MenuButton>
          <HiOutlineMenu />
          <DropDown className="dropDown">
            <MenuItem onClick={() => history.push("/liveMarket")}>
              Live Market
            </MenuItem>
            <MenuItem onClick={() => history.push("/investmentTracker")}>
              Track Your Investments
            </MenuItem>
            <MenuItem onClick={() => history.push("/investmentScenarios")}>
              Create Investment Scenarios
            </MenuItem>
          </DropDown>
        </MenuButton>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  flex: 1;
  z-index: 10;
  position: sticky;
  top: 0;
  background: whitesmoke;
`;

const Logo = styled.div`
  flex: 0.7;
  margin-left: 15px;
  display: flex;
`;

const NavItems = styled.div`
  display: flex;
  margin-right: 15px;
  flex: 0.3;
`;

const MenuButton = styled.ul`
  &:hover .dropDown {
    display: block;
    z-index: 10;
  }
`;

const DropDown = styled.div`
  display: none;
  font-size: 10px;
  position: absolute;
  background: #ff9906;
  padding: 10px;
  right: 0px;
  font-size: 20px;
  color: white;
`;

const MenuItem = styled.li`
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

export default Header;
