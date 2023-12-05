import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationBar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
const App = () => {
  const [showCart, setShowCart] = useState(false);

  const onCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <NavigationBar onShowCart={onCartHandler} />
      {showCart && <Cart />}
      <Header />
      <Products />
      <Footer />
    </>
  );
};

export default App;
