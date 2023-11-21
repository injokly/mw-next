import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
const GiftDetail = (props) => {
  const [data, setData] = useState("");
  console.log(`loginingg` + JSON.stringify(props));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const uri = `/ib20/act/CMMNOT0201000200A?ib20_media=MDA00003&joinMode=N&evntId=` + props.id;
        let params = { evntId: props.id, joinMode: "N" };
        console.log(`loginingg222` + JSON.stringify(props.id));
        const response = await axios.post(`${uri}`, params);
        setData(decodeURIComponent(response.data._msg_._body_.cntnt.replace(/\+/g, " ")));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // 데이터를 가공하여 표시
  const formattedData = manipulateData(data);

  return <>
    <div>{formattedData}</div>
  </>;
};

// 데이터를 가공하는 함수
const manipulateData = (data) => {
  // 예시: 데이터에서 특정 부분을 강조하는 가공 로직
  // 스타일을 추가할 속성
  let additionalStyle = "display: none;";
  // 스타일이 추가된 새로운 HTML 문자열 생성
  console.log(`manipulateData ` + JSON.stringify(data));
  let manipulatedData = data.replace('<div class="pc_show"', `<div class="pc_show" style="${additionalStyle}" `).replace('<div class="mob_show"', `<div class="mob_show" style="${additionalStyle}" `);

  return <div dangerouslySetInnerHTML={{ __html: manipulatedData }} />;
};

export default GiftDetail;
