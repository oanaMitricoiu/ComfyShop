import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/rm410-18.jpg";
import "./navigation.styles.scss";

const Navigation = () => {
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
                <Link className="nav-link" to="/sign-in">
                    Sign In
                </Link>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
