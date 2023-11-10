import React from 'react'
import { useState, useEffect } from 'react'
import HeadInfo from '@/components/HeadInfo'
import Image from 'next/image'
import axios from 'axios'
import { callAction } from './api/fetch.js';


const gifts = () => {
  var eventList = [];

  const uri = 'https://m.kbanknow.com/ib20/act/MWBMAN0000000101A?ib20_media=MDA00003'
  let params = { 'pStrCscTitle': 'title Test' };
  const [evt, setEvt] = useState([]);
  useEffect(() => {
    axios.post(`${uri}`, params)
      .then(res => {
        console.log(`useEffect axios data : ` + res);
        decodedEventList = JSON.parse(decodeURIComponent(JSON.stringify(res)).replace(/\+g/, " "))
        eventList = decodedEventList.data._msg_._body || {};
        setData(eventList)
      })
      .catch(function (error) {
        setEvt({'main':'sodfijsidfjas'})
      })
  }, [])

  return (
    <div>
      <HeadInfo></HeadInfo>
      <h1>혜택</h1>


      <div id="container">
        <div id="container_inner">

          <div id="content">

            <div class="content type-renewal">

              <h1 class="blind">케이뱅크</h1>
              <h2 class="blind">혜택존</h2>

              <div class="container-component mt20 mb20">
                <div class="component-tab no-space">
                  <div class="tab-group">
                    <div class="tab-content-group">
                      <div class="tab-content">

                        <div class="benefit-list-group">
                          <ul>
                            <li class="list-item">
                              <div class="img-figure">
                                <div class="label">
                                  <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_stock.png"} />
                                </div>
                              </div>
                              <a class="tap-link" href="#none">
                                <div class="col-cont">
                                  <div class="txt-eyebrow">주식계좌만들고</div>
                                  <div class="txt-ttl">테슬라, 넷플릭스 주주되기 <div class="tag positive">
                                    <span class="txt">앵콜</span>
                                  </div>
                                  </div>
                                </div>
                                <div class="col-state">
                                  <i class="ico-arrow-link" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                            <li class="list-item">
                              <div class="img-figure">
                                <div class="label">
                                  <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_carrot.png"} />
                                </div>
                              </div>
                              <a class="tap-link" href="#none">
                                <div class="col-cont">
                                  <div class="txt-eyebrow">주식계좌만들고</div>
                                  <div class="txt-ttl">테슬라, 넷플릭스 주주되기</div>
                                </div>
                                <div class="col-state">
                                  <i class="ico-arrow-link" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                            <li class="list-item">
                              <div class="img-figure">
                                <div class="label">
                                  <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_luckygift.png"} />
                                </div>
                              </div>
                              <a class="tap-link" href="#none">
                                <div class="col-cont">
                                  <div class="txt-eyebrow">주식계좌만들고</div>
                                  <div class="txt-ttl">테슬라, 넷플릭스 주주되기</div>
                                </div>
                                <div class="col-state">
                                  <i class="ico-arrow-link" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                            <li class="list-item">
                              <div class="img-figure">
                                <div class="label">
                                  <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_congratulate.png"} />
                                </div>
                              </div>
                              <a class="tap-link" href="#none">
                                <div class="col-cont">
                                  <div class="txt-eyebrow">주식계좌만들고</div>
                                  <div class="txt-ttl">테슬라, 넷플릭스 주주되기</div>
                                </div>
                                <div class="col-state">
                                  <i class="ico-arrow-link" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>

                            <li class="list-item more">
                              <div class="img-figure"></div>
                              <a class="tap-link" href="#none">
                                <div class="col-cont">
                                  <div class="txt-ttl">더 많은 혜택보기</div>
                                </div>
                                <div class="col-state">
                                  <i class="ico-arrow-link" aria-hidden="true"></i>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="benefit-nodata-group">
                          <dl>
                            <dt class="tit">아직 관심혜택이 없어요</dt>
                            <dd class="txt">혜택별 ♡버튼을 눌러서 나만의 관심혜택으로 추가해보세요</dd>
                          </dl>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="component-btn">
                  <div class="btn-group">
                    <button class="btn-lv01 divider-gray" type="button">
                      <span class="txt">종료된 혜택</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default gifts