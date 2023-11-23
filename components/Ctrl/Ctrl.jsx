/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Solid } from "../Solid";

export const Ctrl = ({
  showSecBtn = false,
  horiResizing,
  className,
  solidBg = "posi",
  solidBtnTxt = "#btn_txt",
  solidGrade = "pri",
}) => {
  return (
    <div className={`ctrl ${horiResizing} ${className}`}>
      <Solid
        bg={horiResizing === "fill" ? solidBg : "posi"}
        btnTxt={horiResizing === "fill" ? solidBtnTxt : "#btn_txt"}
        className={`${horiResizing === "fixed" && "class-4"} ${horiResizing === "fill" && "class-5"}`}
        elementBtnIcoTxtClassName={`${horiResizing === "fixed" && "class-3"}`}
        grade={horiResizing === "fill" ? solidGrade : "pri"}
        showIco="off"
        size="medium"
        state="default"
      />
      <Solid
        bg={horiResizing === "fill" ? solidBg : "posi"}
        btnTxt={horiResizing === "fill" ? solidBtnTxt : "#btn_txt"}
        className={`${horiResizing === "fixed" && "class-4"} ${horiResizing === "fill" && "class-5"}`}
        elementBtnIcoTxtClassName={`${horiResizing === "fixed" && "class-3"}`}
        grade={horiResizing === "fill" ? solidGrade : "pri"}
        showIco="off"
        size="medium"
        state="default"
      />
    </div>
  );
};

Ctrl.propTypes = {
  showSecBtn: PropTypes.bool,
  horiResizing: PropTypes.oneOf(["fill", "hug", "fixed"]),
  solidBg: PropTypes.string,
  solidBtnTxt: PropTypes.string,
  solidGrade: PropTypes.string,
};
