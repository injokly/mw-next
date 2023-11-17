import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
//import fullscroll from "@/script/fullscroll.js"

export default function Home({ posts }) {
  console.log(posts);
  const [isLoading, setIsLoading] = useState([true]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      var fullScrollElement = document.querySelector('[data-role="animation-container"]');
      var options = fullScrollElement.dataset;
      fullScrollAnimation.init(fullScrollElement, options);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    // mewbMain은 asis에서 body.mwebMain 으로 돼있는데, body 안에 넣을 수 없어서 div 안에 className 으로 넣음
    <div id="mWebWrap" className="mwebMain">
      <Script
        strategy="afterInteractive"
        src={process.env.PUBLIC_URL + "/resource/js/cmm/lib/swiper.min.js"}
        onLoad={() => {
          var fullScrollElement = document.querySelector('[data-role="animation-container"]');
          var options = fullScrollElement.dataset;
          fullScrollAnimation.init(fullScrollElement, options);
        }}
      />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      <Script async src={process.env.PUBLIC_URL + "/resource/js/cmm/fullscroll.js"} />
      <Script async src={process.env.PUBLIC_URL + "/resource/js/m-ui.js"} />

      <div id="container">
        <div id="container_inner">
          <div id="content">
            <div className="content type-renewal main-new">
              <h1 className="blind">케이뱅크</h1>
              <h2 className="blind">메인페이지</h2>
              {}
              <div className="scroll-nav">
                {}
                <ul></ul>
              </div>
              {}
              {}
              <div className="scroll-container" data-role="animation-container">
                {}
                <div className="scroll-section section0" data-section-title="케이뱅크 시작하기">
                  <div className="tit-area">
                    <p className="tit">
                      <Image width={0} height={16} preload={true} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/makemoney.svg"} alt="make money" />
                    </p>
                    <h3>혜택이 남다른</h3>
                    <div className="video-area">
                      <video muted autoPlay playsInline loop>
                        <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se0.mov"} type='video/mp4; codecs="hvc1"'></source>
                        <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se0.webm"} type="video/webm"></source>
                      </video>
                      <p className="poster">
                        <Image width={230} height={230} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_sec0.png"} alt="poster" />
                      </p>
                    </div>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      <div className="rolling-intro">
                        <div className="inner">
                          <div className="intro-swiper">
                            <div className="swiper-wrapper">
                              {}
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img1.png"} priority={true} alt="생활통장" />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img2.png"} alt="모임통장" />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img3.png"} alt="파킹통장" />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img4.png"} alt="예금적금" />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img5.png"} />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img6.png"} />
                              </div>
                              <div className="swiper-slide">
                                <Image width={224} height={224} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/intro_img7.png"} />
                              </div>
                              {}
                            </div>
                          </div>
                          <button type="button" className="btn-play">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/btn_play_light.svg"} alt="play" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                {}
                <div className="scroll-section section8" data-section-title="생활통장">
                  <div className="tit-area">
                    <h3>생활통장</h3>
                    <h4>
                      매일 매일
                      <br /> <span>생활비</span>가 돌아와요
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      <div className="video-area">
                        <video muted autoplay playsinline preload loop>
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se8.mov"} type='video/mp4; codecs="hvc1"' />
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se8.webm"} type="video/webm" />
                        </video>
                        <p className="poster">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_sec8.png"} alt="poster" />
                        </p>
                        <button type="button" className="btn-play">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/btn_play_dark.svg"} alt="play" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section9" data-section-title="모임통장">
                  <div className="tit-area">
                    <h3>모임통장</h3>
                    <h4>
                      우리끼리 맞춤프사
                      <br /> <span>모임비에 금리까지</span>
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      <div className="moim-swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/moim_01.png"} alt="\uBAA8\uC784\uD1B5\uC7A5" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/moim_02.png"} alt="\uBAA8\uC784\uD1B5\uC7A5" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/moim_03.png"} alt="\uBAA8\uC784\uD1B5\uC7A5" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/moim_04.png"} alt="\uBAA8\uC784\uD1B5\uC7A5" />
                          </div>
                        </div>
                        ¬
                      </div>
                    </div>
                  </div>
                </div>
                {}
                {}
                <div className="scroll-section section1" data-section-title="플러스박스">
                  <div className="tit-area">
                    <h3>파킹통장 플러스박스</h3>
                    <h4>
                      띵동<i className="ico-emoji">🎵</i> 오늘도 <br /> <span>이자</span>가 들어왔어요
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      <div className="video-area">
                        <video muted autoPlay playsInline>
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se1.mov"} type='video/mp4; codecs="hvc1"' />
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se1.webm"} type="video/webm" />
                        </video>
                        <p className="poster">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_sec1.png"} alt="poster" />
                        </p>
                        <button type="button" className="btn-play">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/btn_play_dark.svg"} alt="play" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section2" data-section-title="대출한도 알아보기">
                  <div className="tit-area">
                    <h3>아파트담보대출</h3>
                    <h4>
                      <span>2분</span>이면
                      <br />
                      금리·한도 조회 OK
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area apt-area">
                    <div className="inner-area">
                      <div className="apt-box">
                        <div
                          className="apt-img apt1"
                          style={{
                            backgroundImage: 'url("/resource/img/reform/mweb/new23/ic_apt1.png")',
                          }}
                        />
                        <div
                          className="apt-img apt2"
                          style={{
                            backgroundImage: 'url("/resource/img/reform/mweb/new23/ic_apt2.png")',
                          }}
                        />
                        <div
                          className="apt-img apt3"
                          style={{
                            backgroundImage: 'url("/resource/img/reform/mweb/new23/ic_apt3.png")',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section3" data-section-title="캐시백 혜택받기">
                  <div className="tit-area">
                    <h3>MY체크카드</h3>
                    <h4>
                      47개 브랜드에서
                      <br />
                      결제할 때마다 최대{" "}
                      <span>
                        <em data-ani-count={500}>0</em>원
                      </span>
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      {}
                      <div className="logo-swiper" dir="ltr">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall1.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall2.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall3.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall4.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall5.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall6.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall7.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall8.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall9.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall10.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall11.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall12.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall13.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall14.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall15.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall16.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall17.png"} alt="logo" />
                          </div>
                        </div>
                      </div>
                      <div className="logo-swiper mt10" dir="rtl">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall18.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall19.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall20.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall21.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall22.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall23.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall24.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall25.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall26.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall27.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall28.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall29.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall30.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall31.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall32.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall33.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall34.png"} alt="logo" />
                          </div>
                          <div className="swiper-slide">
                            <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/logowall35.png"} alt="logo" />
                          </div>
                        </div>
                      </div>
                      {}
                      <div className="card-area">
                        <div className="card-bnr">
                          <div className="flip">
                            <div className="front">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/card_MY_02_F.png"} alt />
                            </div>
                            <div className="back">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/card_MY_02_B.png"} alt />
                            </div>
                          </div>
                        </div>
                      </div>
                      {}
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section4" data-section-title="오늘 기분 남기기">
                  <div className="tit-area">
                    <h3>기분통장</h3>
                    <h4>
                      오늘 내 기분,
                      <br />
                      하루종일{" "}
                      <span>
                        <em data-ani-count="[2626, 555, 486, 9413, 1004]">2,626</em>원
                      </span>
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="kibuwn-area">
                      <div className="video-area">
                        <video muted loop autoplay playsinline preload>
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se4.mov"} type='video/mp4; codecs="hvc1"' />
                          <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se4.webm"} type="video/webm" />
                        </video>
                        <p className="poster">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_sec4.png"} alt="poster" />
                        </p>
                        <button type="button" className="btn-play">
                          <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/btn_play.svg"} alt="play" />
                        </button>
                      </div>
                      <div className="text-area">
                        <ul
                          style={{
                            transform: "translate3d(0px, 0, 0px)",
                          }}
                        >
                          <li className="color1">드디어 월급날 입장!</li>
                          <li className="color2">오오오 완전 신나!</li>
                          <li className="color3">오늘은 사랑이 넘쳐 s2</li>
                          <li className="color4">한고비 넘긴 날 구사일생</li>
                          <li className="color5">기분좋은 나른함</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-section section5" data-section-title="꿀정보 받아보기">
                  <div className="tit-area">
                    <h3>머니톡</h3>
                    <h4>
                      매일 아침 받아 보는
                      <br />
                      <span>돈 되는 뉴스레터</span>
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="inner-area">
                      <div className="swiper-container newletter-swiper mtalkRecomm-body">
                        <div className="mtalkRecomm-swiper">
                          <div className="swiper-container">
                            <ul className="swiper-wrapper">
                              <li className="swiper-slide bnr_size">
                                <a href="#n" className="mtalkRecomm-item bnr_box" role="button" tabIndex={0} data-bgcolor="#5d47ff">
                                  <div
                                    className="mtalk-img"
                                    style={{
                                      backgroundImage: 'url("/resource/img/reform/icon/join_topic_img16.png")',
                                    }}
                                  />
                                  <div className="mtalk-name">보험</div>
                                  <div className="mtalk-tit">
                                    <span>운전자라면 주목!</span>
                                    <span>갱신하면 더 손해인 보험?</span>
                                  </div>
                                </a>
                              </li>
                              <li className="swiper-slide bnr_size">
                                <a href="#n" className="mtalkRecomm-item bnr_box" role="button" tabIndex={0} data-bgcolor="#b233ff">
                                  <div
                                    className="mtalk-img"
                                    style={{
                                      backgroundImage: 'url("/resource/img/reform/icon/join_topic_img16.png")',
                                    }}
                                  />
                                  <div className="mtalk-name">오늘의 추천 톡</div>
                                  <div className="mtalk-tit">
                                    <span>미국이 돈줄을 죄는데..</span>
                                    <span>내 주식.. 코인이 떨어진다?!</span>
                                  </div>
                                </a>
                              </li>
                              <li className="swiper-slide bnr_size">
                                <a href="#n" className="mtalkRecomm-item bnr_box" role="button" tabIndex={0} data-bgcolor="#00a8eb">
                                  <div
                                    className="mtalk-img"
                                    style={{
                                      backgroundImage: 'url("/resource/img/reform/icon/join_topic_img16.png")',
                                    }}
                                  />
                                  <div className="mtalk-name">오늘의 추천 톡</div>
                                  <div className="mtalk-tit">
                                    <span>미국이 돈줄을 죄는데..</span>
                                    <span>내 주식.. 코인이 떨어진다?!</span>
                                  </div>
                                </a>
                              </li>
                              <li className="swiper-slide bnr_size">
                                <a href="#n" className="mtalkRecomm-item bnr_box" role="button" tabIndex={0} data-bgcolor="#e645e6">
                                  <div
                                    className="mtalk-img"
                                    style={{
                                      backgroundImage: 'url("/resource/img/reform/icon/join_topic_img16.png")',
                                    }}
                                  />
                                  <div className="mtalk-name">오늘의 추천 톡</div>
                                  <div className="mtalk-tit">
                                    <span>미국이 돈줄을 죄는데..</span>
                                    <span>내 주식.. 코인이 떨어진다?!</span>
                                  </div>
                                </a>
                              </li>
                              <li className="swiper-slide bnr_size">
                                <a href="#n" className="mtalkRecomm-item bnr_box" role="button" tabIndex={0} data-bgcolor="#2243e6">
                                  <div
                                    className="mtalk-img"
                                    style={{
                                      backgroundImage: 'url("/resource/img/reform/icon/join_topic_img16.png")',
                                    }}
                                  />
                                  <div className="mtalk-name">오늘의 추천 톡</div>
                                  <div className="mtalk-tit">
                                    <span>미국이 돈줄을 죄는데..</span>
                                    <span>내 주식.. 코인이 떨어진다?!</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                            <div className="swiper-pagination page_position" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section6" data-section-title="더 많은 혜택보기">
                  <div className="tit-area">
                    <h4>
                      요즘 <span>HOT</span>한 혜택
                    </h4>
                    <a href="#" className="btn-more">
                      자세히보기{" "}
                    </a>
                  </div>
                  <div className="cont-area">
                    <div className="benefit-list-group">
                      <ul>
                        <li className="list-item">
                          <div className="img-figure">
                            <div className="label">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_stock.png"} alt />
                            </div>
                          </div>
                          <a className="tap-link" href="#one">
                            <div className="col-cont">
                              <div className="txt-eyebrow">Kbank 6주년</div>
                              <div className="txt-ttl">1만개의 선물이 쏟아집니다</div>
                            </div>
                            <div className="col-state">
                              <i className="ico-arrow-link" aria-hidden="true" />
                            </div>
                          </a>
                        </li>
                        <li className="list-item">
                          <div className="img-figure">
                            <div className="label">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_carrot.png"} alt />
                            </div>
                          </div>
                          <a className="tap-link" href="#one">
                            <div className="col-cont">
                              <div className="txt-eyebrow">최대 100배!</div>
                              <div className="txt-ttl">신용점수만큼 현금으로 드릴게요</div>
                            </div>
                            <div className="col-state">
                              <i className="ico-arrow-link" aria-hidden="true" />
                            </div>
                          </a>
                        </li>
                        <li className="list-item">
                          <div className="img-figure">
                            <div className="label">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_luckygift.png"} alt />
                            </div>
                          </div>
                          <a className="tap-link" href="#one">
                            <div className="col-cont">
                              <div className="txt-eyebrow">지금 바로 전국 세븐일레븐 습격!</div>
                              <div className="txt-ttl">하나만 사도,두 개 사도 50% 할인</div>
                            </div>
                            <div className="col-state">
                              <i className="ico-arrow-link" aria-hidden="true" />
                            </div>
                          </a>
                        </li>
                        <li className="list-item">
                          <div className="img-figure">
                            <div className="label">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_congratulate.png"} alt />
                            </div>
                          </div>
                          <a className="tap-link" href="#one">
                            <div className="col-cont">
                              <div className="txt-eyebrow">반려동물 지킴이</div>
                              <div className="txt-ttl">신세계 상품권 최대 3만원 받기</div>
                            </div>
                            <div className="col-state">
                              <i className="ico-arrow-link" aria-hidden="true" />
                            </div>
                          </a>
                        </li>
                        <li className="list-item">
                          <div className="img-figure">
                            <div className="label">
                              <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/icon/ico_benefit_stock.png"} alt />
                            </div>
                          </div>
                          <a className="tap-link" href="#one">
                            <div className="col-cont">
                              <div className="txt-eyebrow">주식계좌만들고</div>
                              <div className="txt-ttl">테슬라, 넷플릭스 주주되기</div>
                            </div>
                            <div className="col-state">
                              <i className="ico-arrow-link" aria-hidden="true" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {}
                <div className="scroll-section section7" data-section-title="케이뱅크 시작하기">
                  <div className="full-area">
                    <div className="video-area">
                      <video muted autoplay playsinline preload>
                        <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se7.mov"} type='video/mp4; codecs="hvc1"' />
                        <source src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_se7.webm"} type="video/webm" />
                      </video>
                      <p className="poster">
                        <Image width={300} height={300} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/video_sec7.png"} alt="poster" />
                      </p>
                    </div>
                    <div className="play-area">
                      <i className="play-thumb" />
                      <h3>
                        <span className="tit">
                          <em>좋아요</em>
                        </span>
                        <i className="play-party" />
                      </h3>
                      <p className="txt">이제 혜택받으러 갈까요?</p>
                      {} {}
                    </div>
                    <div className="btn-group">
                      <button className="btn-go" type="button">
                        <span className="txt">케이뱅크 시작하기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-fix-group active">
                <i className="ico-arrow-down" />
                <button className="btn-list" type="button">
                  <ul></ul>
                </button>
              </div>
              {}
              <a href="#" className="fix-top" title="\uB9E8 \uC704\uB85C \uC774\uB3D9">
                TOP
              </a>
              {}
            </div>
            {}
          </div>
        </div>
      </div>

      <div id="footer" className="bgGray">
        <div className="footer-renew">
          <h3>고객센터</h3>
          <div className="cs-center">
            <ul>
              <li>은행 1522-1000</li>
              <li>카드 1522-1155</li>
              <li>해외 82-2-3778-9111</li>
            </ul>
            <ul>
              <li>
                <a href="#" title="개인정보처리방침" className="underline">
                  개인정보처리방침
                </a>
              </li>
              <li className="mb5">
                <a href="#" title="신용정보활용체제" className="underline">
                  신용정보활용체제
                </a>
              </li>
              <li>
                <a href="#" title="경영공시">
                  경영공시
                </a>
              </li>
              <li>
                <a href="#" title="전자민원접수">
                  전자민원접수
                </a>
              </li>
            </ul>
          </div>
          <div className="link-center">
            <ul>
              <li>
                <a href="#" target="_blank" title="\uCF00\uC774\uBC45\uD06C \uD398\uC774\uC2A4\uBD81 \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30">
                  <Image width={31} height={31} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/ic_mw_fb.svg"} alt="\uD398\uC774\uC2A4\uBD81" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" title="\uCF00\uC774\uBC45\uD06C \uBE14\uB85C\uADF8 \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30">
                  <Image width={31} height={31} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/ic_mw_blog.svg"} alt="\uBE14\uB85C\uADF8" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" title="\uCF00\uC774\uBC45\uD06C \uC720\uD29C\uBE0C \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30">
                  <Image width={31} height={31} src={process.env.PUBLIC_URL + "/resource/img/reform/mweb/new23/ic_mw_youtube.svg"} alt="\uC720\uD29C\uBE0C" />
                </a>
              </li>
            </ul>
            <div className="copyArea layerTooltip">
              <small>Copyright Kbank. All rights reserved.</small>
              <p
                style={{
                  paddingTop: "6px",
                }}
              >
                2023.07.25 준법감시인 심의필 2023-990 (유효기간 : 2023.12.31)
              </p>
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     },
//      revalidate:20
//   }
// }
