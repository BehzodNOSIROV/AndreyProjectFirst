import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignUpPage from "./pages/sigin-in-and-sigin-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignUpPage} />
      </Switch>
    </div>
  );
}
export default App;
