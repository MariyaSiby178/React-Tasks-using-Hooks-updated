// import { Button } from 'antd'
import React from "react";
// import {HiOutlineSun,HiOutlineMoon} from 'react-icons/hi'
import { IoMoonOutline } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

const Toggletheme = (props) => {
  return (
    <div
      className={`switch ${
        props.collapsed ? "switch-position-collapsed" : "switch-position"
      }`}
    >
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          // checked={selectedTheme === 'light'}
          onChange={props.toggleTheme}
        />
        <label className="tab" htmlFor="radio-1">
          <IoMoonOutline />
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          onChange={props.toggleTheme}
        />
        <label className="tab" htmlFor="radio-2">
          <MdSunny />
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default Toggletheme;
