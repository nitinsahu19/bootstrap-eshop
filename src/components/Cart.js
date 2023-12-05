import React, { useContext, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "./cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
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
                  className="img-fluid"
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="mx-auto">
            PURCHASE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
