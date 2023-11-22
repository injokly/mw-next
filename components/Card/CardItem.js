import React from "react";
const CardItem = ({ item, onClick }) => {

  //날짜 포맷팅 (20231101 -> 11.01)
  const toDateMd = (dateStr, gubun) => {
    const re = /(\d{2})(\d{2})/;
    const replace = "$1" + gubun + "$2";
    var dateStrNoDash = dateStr.substring(4, 8).replace(/[^\d]/g, "");
    return dateStrNoDash.replace(re, replace);
  };

  return (
    <div className="list-item" data-pk={item.txAfBal} onClick={onClick}>
      <button type="button" className="section-tap">
        <div className="row-head">
          <div className="area-date">
            <span className="txt-date">{toDateMd(item.txDt, ".")}</span>
            <span className="txt-time">{toDateMd(item.txHms, ":")}</span>
          </div>
        </div>
        <div className="row-tit">
          <span className="txt-detail">{item.memo}</span>
          <span className="txt-amount secondary1-1">
            <strong>{Number(item.txAmt)}</strong> <strong>원</strong>
          </span>
        </div>
        <div className="row-state">
          <span className="txt-memo">
            <span className="txt"></span>
          </span>
          <span className="txt-sum">
            잔액<em>{Number(item.txAfBal)}</em> <strong>원</strong>
          </span>
        </div>
      </button>
    </div>
  );
};

export default CardItem;
