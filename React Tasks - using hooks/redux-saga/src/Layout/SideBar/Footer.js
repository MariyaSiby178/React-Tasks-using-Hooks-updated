import React from "react";
import userImg from "../../Images/Zayn-Malik.webp";
import "../SideBar/SideBar.css";
import { CiMenuKebab } from "react-icons/ci";
const Footer = (props) => {
  return (
    <div>
      <div className="footer d-flex">
        <div className="">
          <img
            src={userImg}
            className={`img-fluid footer-img ${props.collapsed ? "p-2" : ""}`}
          ></img>
        </div>
        {props.collapsed ? (
          <></>
        ) : (
          <div className="text-position text-start ">
            <span
              className={`fw-bold ${
                props.darkTheme ? "text-light" : "text-dark"
              }`}
            >
              Zayn Malik
            </span>
            <p className="text-secondary">zaynmalik@gmail.com</p>
            {/* <CiMenuKebab/> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
