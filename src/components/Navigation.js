import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">
              Animals ({props.animalsLength})
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds ({props.birdsLength})</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
