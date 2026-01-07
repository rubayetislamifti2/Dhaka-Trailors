import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    const location = useLocation();

    const isActive = (path) =>location.pathname.startsWith(path);
    return(
        <header className="navbar">
            <div className="nav-left">
                <h2 className="logo">DTF Admin</h2>

                <nav className="nav-links">
                    <Link to="/dashboard" className={isActive("/dashboard") ? "active" : ""}>Dashboard</Link>
                    <Link to="/order/new" className={isActive("/order/new") ? "active" : ""}>New Order</Link>
                    <Link to="/order/table" className={isActive("/order/table") ? "active" : ""}>Order List</Link>
                    {/* <Link to="/menu" className={isActive("/menu") ? "active" : ""}>Menu</Link> */}
                </nav>
            </div>
            <div className="nav-right">
                <Link to="/profile" className="profile-link">Profile</Link>

                <button className="logout-btn">Logout</button>
            </div>
        </header>
    );
}

export default Navbar;