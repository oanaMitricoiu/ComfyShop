import { Outlet } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/rm410-18.jpg";
// import "./navigation.styles.scss";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./navigation.styles";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: "70px", width: "70px" }}
                        className="logo"
                    />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>

                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">Sign In</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>

            <Outlet />
        </>
    );
};

export default Navigation;
