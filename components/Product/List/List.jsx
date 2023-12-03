import React from "react";
import styles from "@/pages/trnsList/susin/입출금.module.css";
const List = ({ dtlList, category }) => {
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
    <div className={[styles["component-list-deal"], styles["no-space"]].join(" ")}>
      <div className={styles["list-deal-group"]}>
        <ul className={styles["list-row"]}>
          {dtlList?.map((item, idx) => {
            return (
              <li className={styles["list-item"]}>
                <button className={styles["section-tap"]} type="button">
                  <div className={styles["row-head"]}>
                    <div className={styles["area-date"]}>
                      <span className={styles["txt-date"]}>{toDateMd(item.txDt, ".")}</span>
                      <span className={styles["txt-time"]}>{toDateMd(item.txHms, ":")}</span>
                    </div>
                  </div>
                  <div className={styles["row-tit"]}>
                    <span className={styles["txt-detail"]}>{item.mnyRcvdPsbkCntnt}</span>
                    <span className={[styles["txt-amount"], category === "susin" && styles["secondary1-1"]].join(" ")}>
                      <strong>{toMoney(Number(item.txAmt))}</strong>
                      <strong>원</strong>
                    </span>
                  </div>
                  {category === "susin" && (
                    <div className={styles["row-state"]}>
                      <span className={styles["txt-memo"]}>
                        <span className={styles["txt"]}>{item.txNm}</span>
                      </span>
                      <span className={styles["txt-sum"]}>
                        잔액<em>{toMoney(Number(item.txAfBal))}</em>
                        <strong>원</strong>
                      </span>
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
