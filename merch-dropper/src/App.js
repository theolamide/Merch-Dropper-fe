import React from "react";
import { Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import ProductDisplayDomain from "./components/ProductDisplayDomain";
import CheckoutPage from "./components/Cart/Checkout";
import Home from "./components/Home.js";
import ShoppingCart from "./components/Cart/ShoppingCart";
import DesignShirt from "./components/Shirt/DesignShirt";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Auth/SignUp";
import LearnMore from "./components/LearnMore";
import StripeSetup from "./components/Onboarding/StripeSetup";
import Redirect from "./components/Redirect";
import CreateStore from "./components/Onboarding/CreateStore";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/products"
        render={(props) => <ProductDisplay {...props} />}
      />
      <Route
        exact
<<<<<<< HEAD
        path="/stores/:domain_name"
        render={(props) => <ProductDisplayDomain {...props} />}
=======
        path="/:domain_name"
        render={props => <ProductDisplayDomain {...props} />}
>>>>>>> f389725000d6485a4cfb9a706220ec9c9a7b15a5
      />
      <Route exact path="/:domain_name/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/createstore" component={CreateStore} />
      <Route exact path="/designshirt" component={DesignShirt} />
      <Route exact path="/learnmore" component={LearnMore} />
      <Route exact path="/redirect" component={Redirect} />
      <Route exact path="/stripe-setup" component={StripeSetup} />

      <Footer />
    </div>
  );
}

export default App;
