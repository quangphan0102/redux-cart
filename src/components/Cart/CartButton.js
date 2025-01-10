import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleToggle() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
