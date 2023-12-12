import React, { useEffect, useState } from "react";
import Susin from "./index.js";
import { useRecoilState } from "recoil";
import { scrollState } from "@/recoil/global";
import items from "@/public/datas/입출금";

export default {
  title: "Susin",
  component: Susin,
};

// recoil을 사용하기 위해 한번 감싸줌.
const MockCard = (props) => {
  const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);
  const [dtlList, setDtlList] = useState([]);
  const [category, setCategory] = useState("");
  setProudctScrolling(true);
  useEffect(() => {
    setCategory("susin");
    setDtlList(items); //계좌 전체 정보
  }, []);

  return <Susin storyItems={items} {...props} />;
};

export const Default = (props) => <MockCard {...props}></MockCard>;
export const BindData = (props) => <MockCard storyItems={items} {...props}></MockCard>;
