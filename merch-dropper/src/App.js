import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import Callback from "./components/Callback";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import initialState from "./reducers/initialState";
import ImageUpload from "./components/CloudinaryWidget";
import CheckoutPage from './components/Checkout';
import HomePage from "./components/HomePage";

import DesignShirt from "./components/Shirt/DesignShirt";

function App() {
  const [products] = useState(initialState.products);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/callback" component={Callback} />
        <Route exact path='/cart' component={ShoppingCart} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/products'
          render={(props) => <ProductDisplay {...props} products={products} />}
        />
        <Route exact path="/" component={HomePage} />
        <DesignShirt />
      </Switch>
      {/* <ImageUpload /> */}
      <Footer />
    </div>
  );
}

export default App;
