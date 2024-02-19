import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <header className="flex items-center mb-3 mt-3 w-full">
        {/* Logo */}
        <Link to={"/"}>
          <h2 className="pl-10 cursor-pointer">
            e<span>Shop</span>
          </h2>
        </Link>

        {/* Input field */}
        <div className="ml-[250px] mr-[200px]">
          <input
            type="text"
            value={search}
            placeholder="Search for product"
            onChange={(e) => setSearch(e.target.value)}
            size={"50"}
            className="p-2 outline-none ring-1 ring-slate-600 rounded-md"
          />
          <button className="ml-3 w-[70px] bg-blue-500 p-2 rounded-md">
            Search
          </button>
        </div>
        
        <ul className="flex justify-evenly w-[20%] text-md cursor-pointer font-semibold">
          <NavLink to={"/login"} className="hover:text-blue-600">Login</NavLink>
          <NavLink className="hover:text-blue-600">My Orders</NavLink>
          <NavLink className="relative hover:text-blue-600">
            <FaShoppingCart size={"25px"} className="relative " />
            <p className="absolute top-[-35%] left-7">0</p>
          </NavLink>
        </ul>
      </header>
      <hr />
    </>
  );
};

export default Header;
