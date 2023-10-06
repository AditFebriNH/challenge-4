import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const Header = ({ setSearchTerm, searchTerm, disabledInput }) => {
  return (
    <nav className={`${searchTerm ? "bg-black" : "bg-transparent"} w-full flex justify-between items-center absolute top-0 z-50 px-5`}>
      <Link to="/" className="font-black text-red-600 text-4xl">
        Movielist
      </Link>
      <SearchBar setSearchTerm={setSearchTerm} disabledInput={disabledInput} />
      <div className="flex gap-4 justify-center items-center">
        <button className="border-2 border-red-600 py-2 px-5 font-semibold text-red-600 rounded-full hover:bg-red-600 hover:text-red-100 transition-all">Login</button>
        <button className="bg-red-600 py-2 px-5 font-semibold text-white rounded-full">Register</button>
      </div>
    </nav>
  );
};

export default Header;
