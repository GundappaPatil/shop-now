import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import ProductListing from "./ProductListing";

const Header = () => {

  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Header">
            Shop-Now
          </a>
          <span>Hello Welcome {user && user.email}</span>
          <button  onClick={handleLogout}>
                Log out
              </button>
        </div>
      </nav>
      <div>
        <ProductListing />
      </div>
    </div>
  );
};

export default Header;