import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";
import Callback from "./components/Callback";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";

import initialState from "./reducers/initialState";
// import ImageUpload from "./components/CloudinaryWidget";
import Homepage from "./components/Homepage";

function App() {
  const [products] = useState(initialState.products);
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} exact />
      <Route exact path="/callback" component={Callback} exact />
      <Route path="/cart" component={ShoppingCart} />
      <NavBar />
      {/* <ProductDisplay products={products} /> */}
      <Homepage />
      {/* <ImageUpload /> */}
      <Footer />
    </div>
  );
}

export default App;
