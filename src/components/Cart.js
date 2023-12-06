import React, { useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "./cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // calculate the total amount
  const totalAmount = cartCtx.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // purchase handler
  const purschaseHandler = () => {
    if (cartCtx.cartItems.length === 0) {
      alert("Cart is EMPTY!!! Kindly add items to cart.");
    } else alert("Thanks for Shopping with us, Good Day ahead :)");
  };
  return (
    <>
      <Modal show={true} onHide={props.onClose} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {cartCtx.cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="img-fluid img-thumbnail"
                />
                {item.title}: Price: ${item.price}, Quantity: {item.quantity}
                <Button
                  onClick={() => {
                    cartCtx.removeFromCart(item.title);
                  }}
                  variant="danger"
                >
                  Remove item
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* Display total amount below cart items */}
          <div className="mt-3">
            <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={purschaseHandler}
            variant="primary"
            className="mx-auto"
          >
            PURCHASE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
