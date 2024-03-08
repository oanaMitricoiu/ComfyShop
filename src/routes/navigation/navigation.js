import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/rm410-18.jpg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: "80px", width: "80px" }}
                        className="logo"
                    />
                </Link>

                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                {currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>
                        Sign Out
                    </span>
                ) : (
                    <Link className="nav-link" to="/auth">
                        Sign In
                    </Link>
                )}
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
