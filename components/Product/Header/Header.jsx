import React from "react";
import styles from "@/pages/trnsList/susin/susin.module.css";
//import styles from "./Header.module.css";
const Header = ({ items, category }) => {
  return (
    <div className={[styles["component-header"], category === "susin" ? styles["bg-primary1"] : styles["bg-primary3"]].join(" ")}>
      <div className={styles["header-group"]}>
        <div className={styles["header-content"]}>
          <a className={styles["btn-back"]} href="#">
            <i className={[styles["ico-back"], styles["white"]].join(" ")} aria-hidden="true"></i>
            <span className={styles["hide-txt"]}>이전</span>
          </a>
          <h1 className={styles["tit-header"]}>
            <span>{items.acctDtlInfo?.acctNm}</span>
          </h1>
          <a className={styles["btn-control"]} href="#none">
            <span>관리</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
