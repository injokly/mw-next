import { React, useState, useEffect } from "react";
import HeadInfo from "@/components/HeadInfo";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { unmountComponentAtNode } from 'react-dom';
import { cntntState } from "@/recoil/cntnt";
import { useRecoilState } from "recoil";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const uri = `/ib20/act/CMMNOT0201000200A?ib20_media=MDA00001&evntId=` + id;
  let params = { pStrCscTitle: "title Test" };
  //   const [eventList, setEventList] = useState([]);
  //   var event = {};
  //   useEffect(() => {
  //     axios
  //       .post(`${uri}`, params)
  //       .then((res) => {
  //         var decodedEvent = decodeURIComponent(res.data._msg_._body_.cntnt);
  //         event = decodedEvent || {};
  //         console.log("event cntnt : " + event);
  //         setEventList(event);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, [eventList]);

  const [cntnt, setCntntState] = useRecoilState(cntntState);

  // const fetchData = async () => {
  //   const headers = {
  //     'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     'Accept': '*/*'
  //   }
  //   const response = axios.post(`${uri}`, params, {headers})
  //   .then((res) => {
  //     console.log("res cntnt : " + JSON.stringify(res));
  //     let decodedEvent = decodeURIComponent(res.data._msg_._body_.cntnt.replace(/\+/g, " "));
  //     let pCntnt = decodedEvent || {};
  //     console.log("cntnt : " + pCntnt);
  //     setCntntState(pCntnt);
  //   });
  // };
  // //const { data, isLoading, error } = useQuery(queryKey, queryFn, options)
  // const { data, isLoading } = useQuery("cntnt", fetchData, {
  //   onError: (error) => {
  //     console.error("request failed : ", error);
  //   },
  // });

  let temp = `%3Cdiv+class%3D%22mob_show%22%3E%0D%0A%3Cdiv+class%3D%22imgWideBox%22%3E%0D%0A%0D%0A%3Ca+id%3D%22joinEvnt%22+data-top-div-html%3D%22%3Cimg+src%3D%27%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_1.png%27+width%3D%27100%25%27+style%3D%27border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%27%3E%22%3E%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%EB%B2%84%ED%8A%BC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fcontents_button2%281%29.png%22%3E%3C%2Fa%3E%0D%0A%0D%0A%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%23n%22+id%3D%22joinAddEvnt%22+data-evnt-id%3D%221196%22+data-pop-title%3D%22%EB%A7%A4%EC%9D%BC+%EC%95%8C%EB%A6%BC%EB%B0%9B%EA%B3%A0+%3Cbr%3E+%ED%98%84%EA%B8%88+300%EB%A7%8C%EC%9B%90+%EB%B0%9B%EC%95%84%EA%B0%80%EC%84%B8%EC%9A%94%22+data-btn-name%3D%22%EB%A7%A4%EC%9D%BC+%ED%95%9C%EB%B2%88+%EC%95%8C%EB%A6%BC%EB%B0%9B%EA%B8%B0%22+data-confirm-msg%3D%22%EC%8B%A0%EC%B2%AD%EC%9D%B4+%EC%99%84%EB%A3%8C%EB%90%98%EC%97%88%EC%96%B4%EC%9A%94.%22+data-block-msg%3D%22%EC%9D%B4%EB%AF%B8+%EC%8B%A0%EC%B2%AD%ED%95%98%EC%85%A8%EC%96%B4%EC%9A%94%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+margin-top%3A+-3px%3B+display%3A+block%3B%22+alt%3D%22%EC%95%8C%EB%A6%BC%EC%84%A4%EC%A0%95%EB%B2%84%ED%8A%BC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fcontents_button3.png%22%3E%0D%0A%3C%2Fa%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_5.png%22%3E%0D%0A%0D%0A%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%2Fib20%2Fmnu%2FCMMNOT020100%3Fib20_wc%3DCMMNOT0201000100V%3ACMMNOT0201000200V%26evntId%3D1197%26click%3Devent%22+anchor-handler%3D%22%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%95%8C%EB%A6%BC%EA%B1%B0%EC%A0%88%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_6.png%22%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%09%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_7.png%22%3E%0D%0A%0D%0A++++++++++++++++++++%0D%0A%3C%2Fa%3E%3C%2Fdiv%3E%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%2Fib20%2Fmnu%2FCMMNOT020100%3Fib20_wc%3DCMMNOT0201000100V%3ACMMNOT0201000200V%26evntId%3D1197%26click%3Devent%22+anchor-handler%3D%22%22%3E%0D%0A%3C%2Fa%3E%3C%2Fdiv%3E%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%2Fib20%2Fmnu%2FCMMNOT020100%3Fib20_wc%3DCMMNOT0201000100V%3ACMMNOT0201000200V%26evntId%3D1197%26click%3Devent%22+anchor-handler%3D%22%22%3E%0D%0A%0D%0A%3C%2Fa%3E%3Cdiv+class%3D%22mweb_show%22%3E%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%2Fib20%2Fmnu%2FCMMNOT020100%3Fib20_wc%3DCMMNOT0201000100V%3ACMMNOT0201000200V%26evntId%3D1197%26click%3Devent%22+anchor-handler%3D%22%22%3E%0D%0A%3C%2Fa%3E%3Cdiv+class%3D%22imgWideBox%22%3E%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22%2Fib20%2Fmnu%2FCMMNOT020100%3Fib20_wc%3DCMMNOT0201000100V%3ACMMNOT0201000200V%26evntId%3D1197%26click%3Devent%22+anchor-handler%3D%22%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_1.png%22%3E+++++++++++++++++++%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112gif.gif%22%3E%0D%0A%0D%0A%3C%2Fa%3E%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22https%3A%2F%2Fs.kbanknow.com%2F7MGN50G%22+anchor-handler%3D%22%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+margin-top%3A+-3px%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EB%B2%84%ED%8A%BC%22+src%3D%22%09%2Fresource%2Fimg%2Fnot%2Fcontents_button2%281%29.png%22%3E%0D%0A%3C%2Fa%3E%0D%0A%0D%0A%0D%0A%3Ca+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+href%3D%22https%3A%2F%2Fs.kbanknow.com%2F7MGN50G%22+anchor-handler%3D%22%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+margin-top%3A+-3px%3B+display%3A+block%3B%22+alt%3D%22%EC%95%8C%EB%A6%BC%EC%84%A4%EC%A0%95%EB%B2%84%ED%8A%BC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fcontents_button3.png%22%3E%0D%0A%3C%2Fa%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_5.png%22%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%09%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_7.png%22%3E%0D%0A%0D%0A%3C%2Fdiv%3E%3C%2Fdiv%3E%0D%0A%0D%0A%3Cdiv+class%3D%22pc_show%22%3E%0D%0A%3Cdiv+class%3D%22imgWideBox%22%3E%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_1.png%22%3E++++%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112gif.gif%22%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_pcbtn.png%22%3E%0D%0A%0D%0A%3Cimg+width%3D%22100%25%22+style%3D%22border%3A+0px+currentColor%3B+border-image%3A+none%3B+display%3A+block%3B%22+alt%3D%22%EC%B6%9C%EC%84%9D%EC%B2%B4%ED%81%AC%22+src%3D%22%2Fresource%2Fimg%2Fnot%2Fevent_lucky_112_pc.png%22%3E%0D%0A%3C%2Fdiv%3E%3C%2Fdiv%3E%0D%0A++++++++++++++++++++%0D%0A++++++++++++++++++++%0D%0A++++++++++++++++++++%0D%0A++++++++++++++++++++%0D%0A++++++++++++++++++++%0D%0A++++++++++++++++++++`
  setCntntState(decodeURIComponent(temp.replace(/\+/g, " ")));

  const removeChildren = (parent, ...children) => children.forEach(child => parent.removeChild(child))

  const createMarkup = () => {
    useEffect(() => {
      const tick = setTimeout(() => {
        console.log(`hihihih`);
        let parent = document.querySelector('#danger');
        const targets = parent.querySelectorAll('.mob_show, .pc_show');
        removeChildren(parent, ...targets);
      }, 1);
    }, [])
    return { __html: cntnt }
  }
  return (
    <div>
      <HeadInfo></HeadInfo>
      <div id="danger" dangerouslySetInnerHTML={createMarkup()}></div>
      <div>Post : {id}</div>
    </div >
  );
};

export default Detail;
