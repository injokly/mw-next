import React, { useEffect, useState } from "react";
import styles from "./loan.module.css";
import { deviceState } from "@/recoil/global";
import { useRecoilState } from "recoil";
import dtlList from "@/public/datas/입출금";
import Header from "@/components/Product/Header/Header";
import Card from "@/components/Product/Card/Card";
import Search from "@/components/Product/Search/Search";
import List from "@/components/Product/List/List";

const loan = ({ item }) => {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setDeviceState(""); //모바일 디바이스를 전역상태에 저장
    setCategory("loan");
    setItems(dtlList); //계좌 전체 정보
    return () => {
      setDeviceState("MW"); //컴포넌트 사라질 때 해당 작업 수행. 모바일 디바이스를 전역상태에 저장
    };
  }, []);

  return (
    <div className={[styles["kbank-page-PBKINQ1100000600S_M01"], styles["ui-kbank-page-control"], styles["activeSlide"]].join(" ")}>
      <div className={styles["page-inner-scroll"]}>
        <div className={styles["container-component"]}>
          <Header items={items} category={category} />
          <Card items={items} category={category} />
          <Search items={items} category={category} />
          <List dtlList={items.txBkdwInfo?.dtlList} category={category} />
          <div className={styles["component-card-bg"]}>
            <div className={[styles["card-layout-group"], styles["bg-primary3"]].join(" ")}>
              <div className={styles["card-header"]}>
                <div className={styles["card-account-tit"]}>상품명or별칭(최대10자)</div>
                <div className={styles["card-account-num"]}>000-000-000000</div>
              </div>
              <div className={styles["card-row-main"]}>
                <div className={styles["card-col-content"]}>
                  <div className={styles["sum-num"]}>1,000,000,000원</div>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>0.00%</div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>한도 10,000,000원</div>
              </div>

              <div className={styles["btn-group"]}>
                <button className={[styles["btn-lv02"], styles["white"]].join(" ")} type="button">
                  <span className={styles["txt"]}>원금상환</span>
                </button>
                <a className={[styles["btn-lv02"], styles["white"]].join(" ")} href="#none">
                  <span className={styles["txt"]}>이자조회</span>
                </a>
              </div>
              <div className={styles["btn-group"]}>
                <button className={[styles["btn-lv02"], styles["white"]].join(" ")} type="button">
                  <span className={styles["txt"]}>한도관리</span>
                </button>
                <a className={[styles["btn-lv02"], styles["white"]].join(" ")} href="#none">
                  <span className={styles["txt"]}>이자조회</span>
                </a>
              </div>

              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <em>
                    2021.07.20 만기<span> | </span>
                  </em>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>기간연장 신청</span>
                  </a>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <em>
                    이자 납입 후 기간연장 신청가능<span> | </span>
                  </em>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>이자 납입하기</span>
                  </a>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <em>
                    만기 도래<span> | </span>
                  </em>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>2022.12.31까지 상환해주세요</span>
                  </a>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>YY.MM.DD 기간연장이 실행될 예정이에요.</span>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>대출만기가 지나서 연체되고 있어요</span>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>2022.03.02까지 완납증명서를 제출해주세요</span>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <em>
                    연체중<span> | </span>
                  </em>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>연체이자를 납입해주세요</span>
                  </a>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <em>
                    미제출<span> | </span>
                  </em>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>완납증명서를 제출해주세요</span>
                  </a>
                </div>
              </div>
              <div className={styles["card-row-txt"]}>
                <div className={styles["card-col-tit"]}>
                  <a className={[styles["btn-arrow"], styles["primary1"]].join(" ")} href="#none">
                    <span className={[styles["txt-lv03"], styles["bold"]].join(" ")}>다른 기관의 대출내역도 같이 조회해보세요</span>
                  </a>
                </div>
              </div>
            </div>

            <div className={[styles["card-layout-group"], styles["fixed"], styles["bg-primary3"]].join(" ")}>
              <div className={styles["card-row"]}>
                <div className={styles["card-col-tit"]}>잔액</div>
                <div className={styles["card-col-content"]}>3,000,000,000원</div>
              </div>
            </div>
          </div>
          <div className={[styles["component-search"], styles["no-space"]].join(" ")}>
            <div className={styles["account-search-group"]}>
              <button className={styles["btn-select"]} type="button">
                <span>3개월·최신순</span>
                <i className={styles["ico-arrow-open"]} aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className={[styles["component-list-deal"], styles["no-space"]].join(" ")}>
            <div className={styles["list-deal-group"]}>
              <ul className={styles["list-row"]}>
                <li className={styles["list-item"]}>
                  <button className={styles["section-tap"]} type="button">
                    <div className={styles["row-head"]}>
                      <div className={styles["area-date"]}>
                        <span className={styles["txt-date"]}>00.00</span>
                        <span className={styles["txt-time"]}>00:00</span>
                      </div>
                    </div>
                    <div className={styles["row-tit"]}>
                      <span className={styles["txt-detail"]}>적요 최대 열글자</span>
                      <span className={styles["txt-amount"]}>
                        <strong>100,000,000</strong>
                        <strong>원</strong>
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default loan;
