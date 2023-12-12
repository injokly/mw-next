import React from "react";
import List from "./List.jsx";
import items from "@/public/datas/입출금";
export default {
  title: "List",
  component: List,
};

export const Default = (props) => <List {...props} />;
export const BindData = (props) => <List dtlList={items.txBkdwInfo?.dtlList} {...props} />;
