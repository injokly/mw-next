/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SolidCall1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`solid-call-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.1488 13.1221L7.15009 13.1235C7.21546 13.1924 7.28125 13.2599 7.34738 13.3261L7.40389 13.3826C7.4702 13.4489 7.53757 13.5145 7.60667 13.5796L7.6092 13.582C8.94614 14.8598 10.6365 16.0436 12.2644 16.6088C13.8353 17.1541 15.2413 17.0961 16.2781 16.149L16.2779 16.1489L16.396 16.0361L16.3963 16.0364L16.4253 16.0085L16.6823 15.7514C17.094 15.3398 17.1651 15.1762 17.2145 15.0132C17.268 14.8366 17.268 14.6602 17.2145 14.4836C17.1651 14.3206 17.094 14.1571 16.6823 13.7454L15.5734 12.6365C15.1617 12.2248 14.9982 12.1537 14.8352 12.1043C14.6586 12.0508 14.4822 12.0508 14.3056 12.1043C14.1579 12.1491 14.0132 12.2118 13.6988 12.5085L12.772 13.4356L12.6055 13.6022L12.3711 13.5799L12.2629 13.5696L12.2522 13.5686L12.2417 13.5672C11.8542 13.5136 11.4486 13.3318 11.0349 13.0696C10.6165 12.8043 10.16 12.4375 9.66684 11.9782L9.66669 11.978C9.59176 11.9082 9.51596 11.8362 9.43915 11.7619L7.1488 13.1221ZM7.1488 13.1221C5.87088 11.7851 4.68675 10.0945 4.12141 8.46628C3.58953 6.93446 3.63119 5.55938 4.51143 4.53049M7.1488 13.1221L4.51143 4.53049M4.51143 4.53049L4.69865 4.32943L4.72466 4.30149L4.97852 4.04763C5.3902 3.63596 5.55372 3.5649 5.71672 3.5155C5.89334 3.46197 6.06974 3.46197 6.24635 3.5155C6.40935 3.5649 6.57287 3.63596 6.98455 4.04763L8.09349 5.15658C8.50517 5.56825 8.57622 5.73177 8.62563 5.89477C8.67916 6.07139 8.67916 6.24779 8.62562 6.42441C8.58088 6.57202 8.51813 6.71678 8.2214 7.0312L7.29431 7.95793L7.12776 8.12441L7.15004 8.35884L7.16032 8.4671L7.16133 8.47771L7.16279 8.48827C7.21635 8.87574 7.39816 9.28134 7.66045 9.69506C7.92572 10.1135 8.2925 10.57 8.75191 11.0631L4.51143 4.53049ZM8.96788 11.2907L9.32738 10.9432L8.75204 11.0633C8.8218 11.1382 8.89384 11.2141 8.96788 11.2907Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

SolidCall1.propTypes = {
  color: PropTypes.string,
};
