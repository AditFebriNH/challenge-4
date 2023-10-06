import React from "react";
import PropTypes from "prop-types";
// Styles
import { Content } from "./Grid.styles";

const Grid = ({ header, searchTerm, children }) => {
  return (
    <React.Fragment>
      <section className={`${searchTerm ? "mt-16" : "mt-0"} p-5`}>
        <h1 className="text-black text-5xl font-bold">{header}</h1>
        <Content>{children}</Content>
      </section>
    </React.Fragment>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
};

export default Grid;
