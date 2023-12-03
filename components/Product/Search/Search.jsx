import React from "react";
import styles from "@/pages/trnsList/susin/입출금.module.css";

const Search = ({ items }) => {
  return (
    <div className={[styles["component-search"], styles["no-space"]].join(" ")}>
      <div className={styles["account-search-group"]}>
        <button className={styles["btn-search"]} type="button">
          <span className={styles["hide-txt"]}>검색</span>
          <i className={styles["ico-search-list"]} aria-hidden="true"></i>
        </button>
        <div className={styles["btn-keyword-area"]}>
          <button className={styles["btn-keyword"]} type="button">
            <span className={styles["txt"]}>자동이체</span>
            <i className={styles["ico-delete"]} aria-hidden="true"></i>
          </button>
        </div>
        <button className={styles["btn-select"]} type="button">
          <span>전체·입출금·최신순</span>
          <i className={styles["ico-arrow-open"]} aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
