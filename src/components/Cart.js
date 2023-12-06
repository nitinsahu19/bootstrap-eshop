import { useContext } from "react";
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

  // empty cart message
  let cartEmptyMess;
  if (cartCtx.cartItems.length === 0) {
    cartEmptyMess = <p>No items in the Cart !!!</p>;
  }

  //  Total amount
  const totalTag =
    cartCtx.cartItems.length !== 0 ? (
      <div className="mt-3">
        <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </div>
    ) : null;

  return (
    <>
      <Modal show={true} onHide={props.onClose} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            {cartEmptyMess}
            {cartCtx.cartItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="img-fluid img-thumbnail mr-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <div>
                  <span className="font-weight-bold">{item.title}</span>
                  <span>
                    Price: ${item.price}, Quantity: {item.quantity}
                  </span>
                </div>
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
          {totalTag}
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
