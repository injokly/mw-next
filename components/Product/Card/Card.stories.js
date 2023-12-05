import React from "react";
import Card from "./Card.jsx";
import { RecoilRoot } from "recoil";

export default {
  title: "Card",
  component: Card,
};

export const Default = (props) => {
  <RecoilRoot>
    <Card {...props} />
  </RecoilRoot>;
};
