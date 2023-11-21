import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="list-item">
      <button type="button" className="section-tap">
        <div className="row-head">
          <div className="area-date">
            <span className="txt-date">11.21</span> <span className="txt-time">16:29</span>
          </div>
        </div>
        <div className="row-tit">
          <span className="txt-detail">{item.memo}</span>
          <span className="txt-amount secondary1-1">
            <strong>{item.txAfBal}</strong> <strong>원</strong>
          </span>
        </div>
        <div className="row-state">
          <span className="txt-memo">
            <span className="txt"></span>
          </span>
          <span className="txt-sum">
            잔액<em>1,554,025</em> <strong>원</strong>
          </span>
        </div>
      </button>
    </div>
  );
};

export default CardItem;
