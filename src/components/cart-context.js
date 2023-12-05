import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [totalAmount, updateTotalAmount] = useState(0);

  const addToCartHandler = (item) => {
    // Assuming each item in the cart has a unique title for identification
    // Check if the item is already in the cart
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );

    if (itemInCart) {
      // If the item is already in the cart, you may want to update its quantity or take other actions
      // For simplicity, let's update the quantity for now
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
    // If the item is not in the cart, add it with a quantity of 1
    else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }

    // Update the total amount
    // updateTotalAmount(totalAmount + item.price * item.quantity);
  };

  const removeFromCartHandler = (itemTitle) => {
    // Filter out the item to be removed
    const updatedCartItems = cartItems.filter(
      (item) => item.title !== itemTitle
    );
    setCartItems(updatedCartItems);
  };

  const cartContext = {
    cartItems,
    // totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
