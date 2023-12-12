import React from "react";
import Header from "./Header.jsx";
import items from "@/public/datas/입출금";
import List from "../List/List.jsx";
import Card from "../Card/Card.jsx";
import Search from "../Search/Search.jsx";
import styles from "@/pages/trnsList/susin/susin.module.css";
export default {
  title: "Header",
  component: Header,
};

export const Default = (args) => <Header {...args} />;
export const BindData = (args) => <Header items={items} {...args} />;
export const BaseStory = (args) => (
  <div className={[styles["kbank-page-PBKINQ1100000100S_M01"], styles["ui-kbank-page-control"], styles["activeSlide"]].join(" ")} data-status-text="light">
    <div className={styles["page-inner-scroll"]}>
      <div className={styles["container-component"]}>
        <Header {...args} />
        <Card {...args} />
        <Search {...args} />
        <List dtlList={items.txBkdwInfo?.dtlList} {...args} />
      </div>
    </div>
  </div>
);
