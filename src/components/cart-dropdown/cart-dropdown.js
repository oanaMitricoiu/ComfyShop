import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
