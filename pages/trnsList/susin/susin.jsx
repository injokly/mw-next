import React, { useEffect, useState } from "react";
import styles from "./susin.module.css";
import { deviceState } from "@/recoil/global";
import { useRecoilState } from "recoil";
import dtlList from "@/public/datas/입출금";
import Header from "@/components/Product/Header/Header";
import Card from "@/components/Product/Card/Card";
import Search from "@/components/Product/Search/Search";
import List from "@/components/Product/List/List";

const susin = ({ item }) => {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setDeviceState(""); //모바일 디바이스를 전역상태에 저장
    setCategory("susin");
    setItems(dtlList); //계좌 전체 정보
    return () => {
      setDeviceState("MW"); //컴포넌트 사라질 때 해당 작업 수행. 모바일 디바이스를 전역상태에 저장
    };
  }, []);

  return (
    <div className={[styles["kbank-page-PBKINQ1100000100S_M01"], styles["ui-kbank-page-control"], styles["activeSlide"]].join(" ")} data-status-text="light">
      <div className={styles["page-inner-scroll"]}>
        <div className={styles["container-component"]}>
          <Header items={items} category={category} />
          <Card items={items} category={category} />
          <Search items={items} category={category} />
          <List dtlList={items.txBkdwInfo?.dtlList} category={category} />
          {/* <div className={styles["component-nodata"]}>
            <div className={styles["nodata-statement-group"]}>
              <p className={styles["txt-lv01"]}>거래내역이 없습니다.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default susin;