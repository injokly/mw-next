import React from "react";
import Search from "./Search.jsx";
import items from "@/public/datas/입출금";
export default {
  title: "Search",
  component: Search,
};

export const Default = (props) => <Search {...props} />;
export const BindData = (props) => <Search items={items} {...props} />;
