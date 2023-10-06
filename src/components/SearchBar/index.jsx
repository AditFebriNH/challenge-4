import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

import searchIcon from "../../images/search-icon.svg";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setSearchTerm, disabledInput }) => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <React.Fragment>
      <div className="flex py-2">
        <input
          className="bg-transparent border-l-2 border-y-2 border-red-500 w-[40vw] p-3 pl-5 rounded-l-[50px] outline-none text-white"
          type="text"
          placeholder="What do you want to watch?"
          onChange={handleChange}
          disabled={disabledInput}
        />
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <div className="border-r-2 border-y-2 border-red-500 rounded-r-[50px] text-white grid place-items-center px-4">
            <AiOutlineSearch />
          </div>
        </IconContext.Provider>
      </div>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
