import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-center">
        <img src={logo} className="logo" alt="expensify logo" />
        {location.pathname === "/add-expense" ? (
          <Link to="/" className="btn see-expenses-btn">
            See Expenses
          </Link>
        ) : (
          <p>Welcome User!</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
