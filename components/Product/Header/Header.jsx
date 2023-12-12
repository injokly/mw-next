import React from "react";
import styles from "@/pages/trnsList/susin/susin.module.css";
import PropTypes from "prop-types";
const Header = ({ 
  items,
  category,
  title = items?.acctDtlInfo?.acctNm,
}) => {
  console.log(`Header items `+items);
  return (
    <div className={[styles["component-header"], category === "susin" ? styles["bg-primary1"] : styles["bg-primary3"]].join(" ")}>
      <div className={styles["header-group"]}>
        <div className={styles["header-content"]}>
          <a className={styles["btn-back"]} href="#">
            <i className={[styles["ico-back"], styles["white"]].join(" ")} aria-hidden="true"></i>
            <span className={styles["hide-txt"]}>이전</span>
          </a>
          <h1 className={styles["tit-header"]}>
            <span>{title}</span>
          </h1>
          <a className={styles["btn-control"]} href="#none">
            <span>관리</span>
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  items: PropTypes.object,
  title: PropTypes.string,
  category: PropTypes.oneOf(["susin", "loan"]),  

};

export default Header;
