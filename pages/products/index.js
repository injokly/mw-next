import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Script from "next/script";

const products = () => {
  const uri = "/ib20/act/MWBMAN0000000102A?ib20_media=MDA00003";
  let params = { pStrCscTitle: "title Test" };
  const [isLoading, setIsLoading] = useState([true]);
  const [tabList, setTabList] = useState([]);
  const [pdRcmdFavSvrList1, setPdRcmdFavSvrList1] = useState([]);
  const [pdRcmdFavSvrList2, setPdRcmdFavSvrList2] = useState([]);
  const [pdRcmdFavSvrList3, setPdRcmdFavSvrList3] = useState([]);
  const callKbankApp = () => {
    return (
      <div class="r2popup half" id="tmpId03" data-ui="r2popup" role="dialog" tabindex="-1">
        <div class="r2popup_window">
          <div class="r2popup_box mw-pop-agree">
            <div class="r2popup_header pd22">
              <h2 class="r2popup_title">케이뱅크 바로가기</h2>
            </div>
            <div class="r2popup_body">
              <div class="r2inpanel pd22">
                <p>
                  케이뱅크 앱에서 해당 서비스를 이용하실 수 있어요.
                  <br />
                  앱에서 확인하시겠어요?
                </p>
              </div>
            </div>

            <div class="r2popup_footer">
              <div class="r2popupfoot_btnpanel"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    // axios.post(`${uri}`, params)
    //   .then(res => {
    //     console.log(`useEffect axios data : ` + res);
    //     var decodedEventList = JSON.parse(decodeURIComponent(JSON.stringify(res)).replace(/\+/g, " "))
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    fetch(`/datas/products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(`data.tabList ` + data);
        setTabList(data.tabList);
        setPdRcmdFavSvrList1(data.pdRcmdFavSvrList1);
        setPdRcmdFavSvrList2(data.pdRcmdFavSvrList2);
        setPdRcmdFavSvrList3(data.pdRcmdFavSvrList3);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // data binding 후 html 보여줌
  if (isLoading) {
    return null;
  }

  return (
    <div id="mWebWrap">
      <Script
        strategy="afterInteractive"
        src={process.env.PUBLIC_URL + "/resource/js/cmm/lib/swiper.min.js"}
        onLoad={() => {
          let prdBannerSwiper = new Swiper(".product-carousel-group.ui-swiper .swiper-container", { spaceBetween: 10, loop: false });
        }}
      />
      <div id="container">
        <div id="container_inner">
          <div id="content">
            <div class="content type-renewal">
              <h1 class="blind">케이뱅크</h1>
              <h2 class="blind">상품</h2>

              <div class="main-tab-container">
                <div class="main-tab-content">
                  <div class="container-component frm-prd pb0">
                    <div class="headertab-products">
                      <div class="component-tab sticky-tab no-space type-extend">
                        <div class="tab-group ui-tab">
                          <div class="tab-round-group">
                            <div class="tab-list-type ui-tab-nav">
                              <ul class="tab-list-col" role="tablist">
                                {tabList.map((list) => (
                                  <li key={list.CMN_CD_DTL_ID} class="tab-item active new">
                                    <a class="tab-link" href="#none" role="button">
                                      <img src={process.env.PUBLIC_URL + decodeURIComponent(list.CMN_CD_ABRV_NM)} alt="" />
                                      <span class="txt">{decodeURIComponent(list.CMN_CD_NM)}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="component-products-carousel">
                      <div class="title-group">
                        <div class="title-field-page">주목할 만한 상품</div>
                      </div>

                      <div class="product-carousel-group carousel-group ui-swiper" data-space-between="10">
                        <div class="swiper-container">
                          <div class="swiper-wrapper">
                            {pdRcmdFavSvrList1.map((list) => (
                              <div class="swiper-slide">
                                <a class="section-link" href="#none">
                                  <div class="frm-card">
                                    <div class="img-figure">
                                      <img src={process.env.PUBLIC_URL + decodeURIComponent(list.imgFile).replace(/\+/g, " ")} alt="" />
                                      <p class="txt-notice">
                                        <span>{decodeURIComponent(list.crtDesc).replace(/\+/g, " ")}</span>
                                        <span></span>
                                      </p>
                                    </div>
                                    <div class="product-info">
                                      <div class="tit-product">
                                        <em>{decodeURIComponent(list.fnclNm).replace(/\+/g, " ")}</em>
                                        <span>{decodeURIComponent(list.mktDesc).replace(/\+/g, " ")}</span>
                                      </div>
                                      <span class="txt-btntype">{decodeURIComponent(list.btnNm).replace(/\+/g, " ")}</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="component-product-list">
                      <div class="title-group">
                        <div class="title-field-page">인기상품 Top5</div>
                      </div>
                      <div class="product-list-group">
                        <ul>
                          {pdRcmdFavSvrList2.map((list) => (
                            <li>
                              <a>
                                <em>
                                  <span>{decodeURIComponent(list.fnclNm).replace(/\+/g, " ")}</span>
                                  <span>{decodeURIComponent(list.mktDesc).replace(/\+/g, " ")}</span>
                                </em>
                              </a>
                              {/* <span class="ico-txt">{decodeURIComponent(list.btnNm).replace(/\+/g, " ")}</span> */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div class="component-product-list product-recommend">
                      <div class="title-group">
                        <div class="img-figure">
                          <img src={process.env.PUBLIC_URL + "/resource/img/mmk/main/products/home/PDhome_logo.svg"} alt="make money" />
                        </div>
                        <div class="title-field-page">부자되는 금융 습관</div>
                      </div>
                      <div class="product-recommend-group">
                        <ul>
                          {pdRcmdFavSvrList3.map((list) => (
                            <li>
                              <a href="none">
                                <em>
                                  <img src={process.env.PUBLIC_URL + decodeURIComponent(list.imgFile).replace(/\+/g, " ")} alt="" />
                                  <span>{decodeURIComponent(list.fnclNm).replace(/\+/g, " ")}</span>
                                </em>
                                <b class="txt-detail">
                                  <span>{decodeURIComponent(list.mktDesc).replace(/\+/g, " ")}</span>
                                </b>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default products;
