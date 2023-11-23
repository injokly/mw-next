/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Ctrl } from "../Ctrl";
import { Info } from "../Info";
import { TagBackgroundDark } from "../TagBackgroundDark";
import { Txt } from "../Txt";

export const Account = ({ item }) => {
  return (
    <div className="account">
      <div className="auto-layout-vertical">
        <div className="auto-layout">
          <div className="text-wrapper-2">{item.acctNckNm}</div>
          <TagBackgroundDark className="design-component-instance-node" txt="#txt" />
        </div>
        <div className="text-wrapper-3">{item.acctNbr}</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-4">{Number(item.totMnyWhdrwlAmt)}<span>원</span></div>
      </div>
      {/* 적금용 바 그래프 */}
      {item.pdCd!=='01011000100000000018'&& <div className="frame-2">
        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-5">#D-day</div>
          </div>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/PCya1b4e/img/vector-212-1.svg" />
        </div>
      </div>}
      <div className="frame-5">
        <Info
          className="info-instance"
          comp="txt"
          contentDivClassName="info-3"
          divClassName="info-2"
          level="two"
          titleTxt="#title_txt"
        />
        <Info
          className="info-instance"
          comp="txt"
          contentDivClassName="info-3"
          divClassName="info-2"
          level="two"
          titleTxt="#title_txt"
        />
        <Info
          className="info-instance"
          comp="txt"
          contentDivClassName="info-3"
          divClassName="info-2"
          level="two"
          titleTxt="#title_txt"
        />
      </div>
      <div className="txt-wrapper">
        <Txt
          btnTxt="#btnTxt"
          className="design-component-instance-node"
          divClassName="txt-3"
          grade="ter"
          level="two"
          showIco="off"
          showPadding="on"
          showUnderline="on"
          state="default"
          underlineClassName="txt-4"
        />
      </div>
      {item.pdCd==='01011000100000000018' && 
      <Ctrl className="ctrl-instance" horiResizing="fill" solidBg="nega" solidBtnTxt="#btnTxt" solidGrade="sec" />
      }
    </div>
  );
};
