import React from "react";
import styles from "@/pages/trnsList/susin/susin.module.css";
import { useRecoilState } from "recoil";
import { scrollState } from "@/recoil/global";
const Card = ({ items, category }) => {
  const [proudctScrolling, setProudctScrolling] = useRecoilState(scrollState);
  //날짜 포맷팅 (20231101 -> 11.01)
  const toDateMd = (dateStr, gubun) => {
    const re = /(\d{2})(\d{2})/;
    const replace = "$1" + gubun + "$2";
    var dateStrNoDash = gubun === "." ? dateStr.substring(4, 8).replace(/[^\d]/g, "") : dateStr.substring(0, 4).replace(/[^\d]/g, "");
    return dateStrNoDash.replace(re, replace);
  };

  //금액 포맷팅 (70000 -> 70,000)
  const toMoney = (amt) => {
    amt = String(amt);
    const re = /(-?\d+)(\d{3})/;
    while (re.test(amt)) amt = amt.replace(re, "$1,$2");
    return amt;
  };

  return (
    <div className={styles["component-card-bg"]}>
      <div className={[styles["card-layout-group"], category === "susin" ? styles["bg-primary1"] : styles["bg-primary3"]].join(" ")}>
        <div className={styles["card-header"]}>
          <div className={styles["card-account-tit"]}>
            {items.acctDtlInfo?.acctNm}
            {category === "susin" && (
              <div className={[styles["tag"], styles["account"]].join(" ")}>
                <span className={[styles["txt"], styles["real-black"]].join(" ")}>생활금리</span>
              </div>
            )}
          </div>
          <div className={styles["card-account-num"]}>{items.acctDtlInfo?.acctNbr}</div>
        </div>
        <div className={styles["card-row-main"]}>
          <div className={styles["card-col-content"]}>
            <div className={styles["sum-num"]}>{toMoney(Number(items.acctDtlInfo?.whdrwlAblAmt))}원</div>
          </div>
        </div>
        {category === "loan" && (
          <div className={styles["card-row-txt"]}>
            <div className={styles["card-col-tit"]}>0.00%</div>
          </div>
        )}
        <div className={[styles["card-row-txt"], category === "susin" && styles["flex-right"]].join(" ")}>
          {category === "susin" && (
            <div className={styles["card-col-tit"]}>
              이체가능금액
              <div>
                <span>1,000,000,000</span>원
              </div>
            </div>
          )}
          {category === "loan" && <div className={styles["card-col-tit"]}>한도 1,000,000,000원</div>}
        </div>

        {/* <div className={[styles["card-row-txt"], styles["flex-right"]].join(" ")}>
        <div className={styles["card-col-tit"]}>
          <div className={[styles["tag"], styles["bg-dark"]].join(" ")}>
            <i className={styles["ico-coin"]} aria-hidden="true"></i>

            <div className={styles["txt"]}>
              <span className={styles["bold"]}>캐시백</span> 도전중
            </div>
          </div>
          평균잔액
          <div>
            <span>1,000,000,000</span>원<i className={styles["ico-arrow-link"]} aria-hidden="true"></i>
          </div>
        </div>
      </div> */}

        {category === "susin" && (
          <div className={[styles["card-row-txt"], styles["flex-right"]].join(" ")}>
            <div className={styles["card-col-tit"]}>
              <div className={[styles["tag"], styles["bg-dark"]].join(" ")}>
                <i className={styles["ico-coin"]} aria-hidden="true"></i>
                <div className={styles["txt"]}>
                  <span className={styles["bold"]}>캐시백</span> 이벤트
                </div>
              </div>

              <div>
                <span>도전하기</span>
                <i className={styles["ico-arrow-link"]} aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}

        {/* <div className={[styles["card-row-txt"], styles["flex-right"]].join(" ")}>
        <div className={styles["card-col-tit"]}>
          <div className={[styles["txt"], styles["white"]].join(" ")}>불러오는 중...</div>
        </div>
      </div> */}

        {category === "susin" && (
          <div className={styles["btn-group"]}>
            <button className={styles["btn-lv02"]}>
              <span className={styles["txt"]}>가져오기</span>
            </button>
            <a className={styles["btn-lv02"]} href="#none">
              <span className={styles["txt"]}>이체하기</span>
            </a>
          </div>
        )}

        {category === "loan" && (
          <div className={styles["btn-group"]}>
            <button className={[styles["btn-lv02"], styles["white"]].join(" ")}>
              <span className={styles["txt"]}>한도관리</span>
            </button>
            <a className={[styles["btn-lv02"], styles["white"]].join(" ")} href="#none">
              <span className={styles["txt"]}>이자조회</span>
            </a>
          </div>
        )}

      </div>
      {proudctScrolling && (
        <div className={[styles["card-layout-group"], styles["fixed"], category === "susin" ? styles["bg-primary1"] : styles["bg-primary3"]].join(" ")}>
          <div className={styles["card-row"]}>
            <div className={styles["card-col-tit"]}>잔액</div>
            <div className={styles["card-col-content"]}>3,000,000,000원</div>
          </div>
        </div>
      )}
      {/* header scroll event */}
      {/* <div className={[styles["card-layout-group"], styles["fixed"], styles["bg-primary1"]].join(" ")}>
      <div className={styles["card-row"]}>
        <div className={styles["card-col-tit"]}>잔액</div>
        <div className={styles["card-col-content"]}>1,000,000,000원</div>
      </div>
    </div> */}
    </div>
  );
};

export default Card;
