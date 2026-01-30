import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { CartIcon } from "./icons/CartIcon";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const goTo = useNavigate()
  return (
    <nav className="flex items-center gap-x-10 py-4 px-2 border-b-1 border-gray-200">
      <h1 className="text-2xl font-bold text-green-900">Promo5Shop</h1>
      <ul className="flex items-center gap-x-4">
        <Link to={'/home'}><li className="text-md font-semibold">Home</li></Link>
        <Link to={'/'}><li className="text-md font-semibold">Sign Up</li></Link>
        <Link to={'/products'}><li className="text-md font-semibold">Products</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
