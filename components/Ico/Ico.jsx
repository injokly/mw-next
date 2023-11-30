/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineChevronDown24 } from "../../icons/LineChevronDown24";

export const Ico = ({
  shape,
  size,
  state,
  icon = <LineChevronDown24 className="line-chevron-down" color="#141414" />,
}) => {
  return <div className={`ico ${size} ${shape} ${state}`}>{icon}</div>;
};

Ico.propTypes = {
  shape: PropTypes.oneOf(["solid", "transparent", "stroke"]),
  size: PropTypes.oneOf(["large", "x-small", "xx-small", "small", "xxx-small", "medium"]),
  state: PropTypes.oneOf(["disabled", "default"]),
};
