import React from 'react';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';
import Products from './Products';


const Home = (props) => {
    return (
        <div>
            <NavBar />
            <ShoppingCart />
            {/* <Products /> */}
        </div>
    );
}
 
export default Home;