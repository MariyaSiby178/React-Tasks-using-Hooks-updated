import React from "react";
import { InsuranceFilled } from "@ant-design/icons";

const Logo = (props) => {
  console.log(props);
  return (
    <div className="logo">
      <div className="logo-icon">
        <InsuranceFilled />
      </div>
      {props.collapsed ? (
        <></>
      ) : (
        <div className="d-flex mt-1 ms-3">
          <p className={`fs-5 ${props.darkTheme ? "text-light" : "text-dark"}`}>
            Doc
          </p>
          <span className="text-secondary fs-5">lines</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
