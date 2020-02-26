import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Callback from "./components/Auth/Callback";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import initialState from "./store/reducers/initialState";
import ImageUpload from "./components/CloudinaryWidget";
import CheckoutPage from "./components/Cart/Checkout";
import HomePage from "./components/HomePage.js";
import ShoppingCart from "./components/Cart/ShoppingCart";

import DesignShirt from "./components/Shirt/DesignShirt";
import { useAuth0 } from "./components/Auth/Auth.js";

function App() {
  const [products] = useState(initialState.products);
  const { loading } = useAuth0();

  if(loading) {
    return <div>Loading...</div>
  }

    // useEffect(() => {
    //     console.log(loading);
    // }, [])


  return (
    <div className="App">
      {/* <ProductDisplay products={products} /> */}
      {/* <ImageUpload /> */}
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={ShoppingCart} />
      {/*<Route exact path="/callback" component={Callback} />*/}
      <Route exact path="/checkout" component={CheckoutPage} />

      <Route
        exact
        path="/products"
        render={(props) => <ProductDisplay {...props} products={products} />}
      />
      <Route exact path="/designshirt" component={DesignShirt} />


      <Footer />
    </div>
  );
}

export default App;
