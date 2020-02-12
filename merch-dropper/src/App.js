import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './dummyData';
import Callback from './components/Callback';
import Home from './components/Home';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import productArray from "./components/ProductDisplay";
import ProductDisplay from "./components/ProductDisplay";

function App() {
  const [products] = useState(productArray);

  return (
    <div className="App">
      <Route exact path="/" component={Home} exact />
      <Route exact path="/callback" component={Callback} exact />
      {/* <NavBar /> */}
      {/* <Homepage /> */}
      <ShoppingCart />
      {/* // <Products product={products}/> */}
      <ProductDisplay product={products} />
      <Footer />
    </div>
  );
}

export default App;
