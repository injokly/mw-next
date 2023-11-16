import React from "react";
import { useState, useEffect, useRef } from "react";
import HeadInfo from "@/components/HeadInfo";
import Image from "next/image";
import { useRouter } from "next/router.js";
import axios from "axios";
import { callAction } from "./api/fetch.js";
import useSWR from 'swr'


const gifts = () => {
  const uri = "/ib20/act/MWBMAN0000000101A?ib20_media=MDA00003";
  let params = { pStrCscTitle: "title Test" };
  const [eventList, setEventList] = useState([]);
  const fetcher = () => fetch(uri)
  .then((res) => res.json())
  .then((data) => {
    console.log(`useSwr data` + JSON.stringify(data._msg_._body_.eventListAll));
    setEventList(data._msg_._body_.eventListAll);
    console.log(eventList);
  })
  // useEffect(() => {
  // axios.post(`${uri}`, params)
  // .then(res => {
  //   console.log(`useEffect axios data : ` + res);
  //   var decodedEventList = JSON.parse(decodeURIComponent(JSON.stringify(res)).replace(/\+g/, " "))
  //   eventList = decodedEventList || {};
  //   setData(eventList)
  // })
  // .catch(function (error) {
  //   console.log(error)
  //   setData({'main':'sodfijsidfjas'})
  // })


  // fetch(`/datas/gifts.json`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setEventList(data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     setEventList({ main: "sodfijsidfjas" });
  //   });
  // }, []);

  const nameInput = useRef(3);
  const onClick = () => {
    console.log("clicked " + nameInput + Object.values(nameInput.current));

    nameInput.current;
  };
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };
  console.log(nextId.current);
    
  const { data, error, isLoading } = useSWR(uri, fetcher)
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div class="loadingio-spinner-spinner-2fyaftvso4h"><div class="ldio-ivrbut54yo"></div></div>

  const router = useRouter();
  return (
    <div>
      <HeadInfo></HeadInfo>
      <div id="container">
        <div id="container_inner">
          <div id="content">
            <div className="content type-renewal">
              <h1 className="blind">케이뱅크</h1>
              <h2 className="blind">혜택존</h2>
              <div className="container-component mt20 mb20">
                <div className="component-tab no-space">
                  <div className="tab-group">
                    <div className="tab-content-group">
                      <div className="tab-content">
                        <div className="benefit-list-group">
                          <ul>
                            {eventList.length !== 0 ? eventList
                            .filter((evt)=>evt.END_YN==='N')
                            .map((evt) => (
                              <li key={evt.EVNT_ID} className="list-item">
                                <div className="img-figure">
                                  <div ref={nameInput} className="label">
                                    <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/not/" + decodeURIComponent(evt.ICON_FILE_NM)} />
                                  </div>
                                </div>
                                <a onClick={() => router.push(`/gift/${evt.EVNT_ID}`)} className="tap-link">
                                  <div className="col-cont">
                                    <div className="txt-eyebrow">{decodeURIComponent(evt.TTL_CND).replace(/\+/g, " ")}</div>
                                    <div className="txt-ttl">
                                      {decodeURIComponent(evt.TTL_BNFS).replace(/\+/g, " ")}
                                      {evt.EVNT_TAG && <div className="tag positive">
                                        <span className="txt">{decodeURIComponent(evt.EVNT_TAG).replace(/\+/g, " ")}</span>
                                      </div>
                                      }
                                    </div>
                                  </div>
                                  <div className="col-state">
                                    <i className="ico-arrow-link" aria-hidden="true"></i>
                                  </div>
                                </a>
                              </li>
                            )) :
                              <div className="benefit-nodata-group">
                                <dl>
                                  <dt className="tit">아직 관심혜택이 없어요</dt>
                                  <dd className="txt">혜택별 ♡버튼을 눌러서 나만의 관심혜택으로 추가해보세요</dd>
                                </dl>
                              </div>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="component-btn">
                  <div className="btn-group">
                    <button className="btn-lv01 divider-gray" type="button">
                      <span className="txt">종료된 혜택</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gifts;
