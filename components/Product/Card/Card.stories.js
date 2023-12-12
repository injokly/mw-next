import React from "react";
import Card from "./Card.jsx";
import { useRecoilState } from "recoil";
import { scrollState } from "@/recoil/global";
import items from "@/public/datas/입출금";
export default {
  title: "Card",
  component: Card,
};
// recoil을 사용하기 위해 한번 감싸줌.
const MockCard = (props) => {
  const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);
  setProudctScrolling(true);
  return <Card {...props} />;
};

// const Template = () => <MockCard />;
// export const Default = Template.bind({});
export const Default = (props) => <MockCard {...props}></MockCard>;
export const BindData = (props) => <MockCard items={items} {...props}></MockCard>;
export const Susin = (props) => <MockCard category="susin" {...props}></MockCard>;
