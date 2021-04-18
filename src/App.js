import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import HomePage from "./Components/HomePage";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import Header from "./Components/Header";
import LiveMarket from "./Components/LiveMarket";
import InvestmentTracker from "./Components/InvestmentTracker";
import InvestmentScenarios from "./Components/InvestmentScenarios";
import NewsDisplay from "./Components/NewsDisplay";
import Footer from "./Components/Footer";
import FavoriteCoins from "./Components/LiveMarket/FavoriteCoins";

const App = () => {
  const [theme, setTheme] = useState("light");

  const lightMode = () => {
    setTheme("light");
  };

  const darkMode = () => {
    setTheme("dark");
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header lightMode={lightMode} darkMode={darkMode} />
        <NewsDisplay />
        <Switch>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route exact path="/">
            <HomePage darkMode={theme} />
          </Route>
          <Route
            exact
            path={["/liveMarket", "/liveMarket/favorites"]}
            component={LiveMarket}
          />
          <Route exact path="/liveMarket/favorites">
            <FavoriteCoins />
          </Route>
          <Route path="/investmentTracker">
            <InvestmentTracker />
          </Route>
          <Route
            exact
            path={[
              "/investmentScenarios",
              "/investmentScenarios/fomoScenario",
              "/investmentScenarios/hodlScenario",
            ]}
            component={InvestmentScenarios}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
