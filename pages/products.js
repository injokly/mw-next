import React from 'react'
const test = process.env.PUBLIC_URL
console.log('######test '+test);

const products = () => {
  return (
    <div id="mWebWrap">
    <div id="header" className="is-fix">
      <div className="header-wrap">
        <div className="header">
          <div className="mweb-main-logo">
            <a href="#one" className="logo">
              <span className="hidden">kbank</span>
            </a>
          </div>
          <div className="mweb-main-gnb">
            <ul>
              <li>
                <a href="/was_app/mweb/MWBMAN0000000102V.html">상품</a>
              </li>
              <li>
                <a href="/was_app/mweb/MWBMAN0000000101V.html">혜택</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
            <div
              className="scroll-container"
              data-role="animation-container"
            >
              {}
              <div
                className="scroll-section section0"
                data-section-title="\uCF00\uC774\uBC45\uD06C \uC2DC\uC791\uD558\uAE30"
              >
                <div className="tit-area">
                  <p className="tit">
                    <img
                      src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/makemoney.svg"}
                      alt="make money"
                    />
                  </p>
                  <h3>혜택이 남다른</h3>
                  <div className="video-area">
                    <video muted autoPlay playsInline loop></video>
                    <p className="poster">
                      <img
                        src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/video_sec0.png"}
                        alt="poster"
                      />
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
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img1.png"}
                                alt="\uC0DD\uD65C\uD1B5\uC7A5"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img2.png"}
                                alt="\uBAA8\uC784\uD1B5\uC7A5"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img3.png"}
                                alt="\uD30C\uD0B9\uD1B5\uC7A5"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img4.png"}
                                alt="\uC608\uAE08\uC801\uAE08"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img5.png"}
                                alt="\uC2E0\uC6A9\uB300\uCD9C"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img6.png"}
                                alt="\uB2F4\uBCF4\uB300\uCD9C"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/intro_img7.png"}
                                alt="\uCCB4\uD06C\uCE74\uB4DC"
                              />
                            </div>
                            {}
                          </div>
                        </div>
                        <button type="button" className="btn-play">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/btn_play_light.svg"}
                            alt="play"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              <div
                className="scroll-section section8"
                data-section-title="\uC0DD\uD65C\uD1B5\uC7A5 \uB9CC\uB4E4\uAE30"
              >
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
                      <video
                        muted
                        autoPlay
                        playsInline
                        loop
                      ></video>
                      <p className="poster">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/video_sec8.png"}
                          alt="poster"
                        />
                      </p>
                      <button type="button" className="btn-play">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/btn_play_dark.svg"}
                          alt="play"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div
                className="scroll-section section9"
                data-section-title="\uBAA8\uC784 \uC2DC\uC791\uD558\uAE30"
              >
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
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/moim_01.png"}
                            alt="\uBAA8\uC784\uD1B5\uC7A5"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/moim_02.png"}
                            alt="\uBAA8\uC784\uD1B5\uC7A5"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/moim_03.png"}
                            alt="\uBAA8\uC784\uD1B5\uC7A5"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/moim_04.png"}
                            alt="\uBAA8\uC784\uD1B5\uC7A5"
                          />
                        </div>
                      </div>¬
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              <div
                className="scroll-section section1"
                data-section-title="\uB9E4\uC77C \uC774\uC790\uBC1B\uAE30"
              >
                <div className="tit-area">
                  <h3>파킹통장 플러스박스</h3>
                  <h4>
                    띵동<i className="ico-emoji">🎵</i> 오늘도 <br />{" "}
                    <span>이자</span>가 들어왔어요
                  </h4>
                  <a href="#" className="btn-more">
                    자세히보기{" "}
                  </a>
                </div>
                <div className="cont-area">
                  <div className="inner-area">
                    <div className="video-area">
                      <video muted autoPlay playsInline></video>
                      <p className="poster">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/video_sec1.png"} 
                          alt="poster"
                        />
                      </p>
                      <button type="button" className="btn-play">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/btn_play_dark.svg"}
                          alt="play"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div
                className="scroll-section section2"
                data-section-title="\uB300\uCD9C\uD55C\uB3C4 \uC54C\uC544\uBCF4\uAE30"
              >
                <div className="tit-area">
                  <h3>아파트담보대출</h3>
                  <h4>
                    <span>2분</span>이면
                    <br />
                    금리·한도 조회 OK
                  </h4>
                  <a href="#" className="btn-more">
                    자세히보기{" "}
                  </a>qnehd
                </div>
                <div className="cont-area apt-area">
                  <div className="inner-area">
                    <div className="apt-box">
                      <div className="apt-img apt1" />
                      <div className="apt-img apt2" />
                      <div className="apt-img apt3" />
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div
                className="scroll-section section3"
                data-section-title="\uCE90\uC2DC\uBC31 \uD61C\uD0DD \uBC1B\uAE30"
              >
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
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall1.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall2.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall3.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall4.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall5.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall6.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall7.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall8.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall9.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall10.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall11.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall12.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall13.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall14.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall15.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall16.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall17.png"}
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="logo-swiper mt10" dir="rtl">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall18.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall19.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall20.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall21.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall22.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall23.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall24.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall25.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall26.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall27.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall28.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall29.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall30.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall31.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall32.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall33.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall34.png"}
                            alt="logo"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/logowall35.png"}
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                    {}
                    <div className="card-area">
                      <div className="card-bnr">
                        <div className="flip">
                          <div className="front">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/card_MY_02_F.png"}
                              alt
                            />
                          </div>
                          <div className="back">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/card_MY_02_B.png"}
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                  </div>
                </div>
              </div>
              {}
              <div
                className="scroll-section section4"
                data-section-title="\uC624\uB298 \uAE30\uBD84 \uB0A8\uAE30\uAE30"
              >
                <div className="tit-area">
                  <h3>기분통장</h3>
                  <h4>
                    오늘 내 기분,
                    <br />
                    하루종일{" "}
                    <span>
                      <em data-ani-count="[2626, 555, 486, 9413, 1004]">
                        2,626
                      </em>
                      원
                    </span>
                  </h4>
                  <a href="#" className="btn-more">
                    자세히보기{" "}
                  </a>
                </div>
                <div className="cont-area">
                  <div className="kibuwn-area">
                    <div className="video-area">
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                      ></video>
                      <p className="poster">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/video_sec4.png"}
                          alt="poster"
                        />
                      </p>
                      <button type="button" className="btn-play">
                        <img
                          src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/btn_play.svg"}
                          alt="play"
                        />
                      </button>
                    </div>
                    <div className="text-area">
                      <ul
                        style={{
                          transform: "translate3d(0px, 0, 0px)"
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
              <div
                className="scroll-section section5"
                data-section-title="\uAFC0\uC815\uBCF4 \uBC1B\uC544\uBCF4\uAE30"
              >
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
                              <a
                                href="#n"
                                className="mtalkRecomm-item bnr_box"
                                role="button"
                                tabIndex={0}
                                data-bgcolor="#5d47ff"
                              >
                                <div
                                  className="mtalk-img"
                                  style={{
                                    backgroundImage:
                                      'url("/resource/img/reform/icon/join_topic_img16.png")'
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
                              <a
                                href="#n"
                                className="mtalkRecomm-item bnr_box"
                                role="button"
                                tabIndex={0}
                                data-bgcolor="#b233ff"
                              >
                                <div
                                  className="mtalk-img"
                                  style={{
                                    backgroundImage:
                                      'url("/resource/img/reform/icon/join_topic_img16.png")'
                                  }}
                                />
                                <div className="mtalk-name">
                                  오늘의 추천 톡
                                </div>
                                <div className="mtalk-tit">
                                  <span>미국이 돈줄을 죄는데..</span>
                                  <span>내 주식.. 코인이 떨어진다?!</span>
                                </div>
                              </a>
                            </li>
                            <li className="swiper-slide bnr_size">
                              <a
                                href="#n"
                                className="mtalkRecomm-item bnr_box"
                                role="button"
                                tabIndex={0}
                                data-bgcolor="#00a8eb"
                              >
                                <div
                                  className="mtalk-img"
                                  style={{
                                    backgroundImage:
                                      'url("/resource/img/reform/icon/join_topic_img16.png")'
                                  }}
                                />
                                <div className="mtalk-name">
                                  오늘의 추천 톡
                                </div>
                                <div className="mtalk-tit">
                                  <span>미국이 돈줄을 죄는데..</span>
                                  <span>내 주식.. 코인이 떨어진다?!</span>
                                </div>
                              </a>
                            </li>
                            <li className="swiper-slide bnr_size">
                              <a
                                href="#n"
                                className="mtalkRecomm-item bnr_box"
                                role="button"
                                tabIndex={0}
                                data-bgcolor="#e645e6"
                              >
                                <div
                                  className="mtalk-img"
                                  style={{
                                    backgroundImage:
                                      'url("/resource/img/reform/icon/join_topic_img16.png")'
                                  }}
                                />
                                <div className="mtalk-name">
                                  오늘의 추천 톡
                                </div>
                                <div className="mtalk-tit">
                                  <span>미국이 돈줄을 죄는데..</span>
                                  <span>내 주식.. 코인이 떨어진다?!</span>
                                </div>
                              </a>
                            </li>
                            <li className="swiper-slide bnr_size">
                              <a
                                href="#n"
                                className="mtalkRecomm-item bnr_box"
                                role="button"
                                tabIndex={0}
                                data-bgcolor="#2243e6"
                              >
                                <div
                                  className="mtalk-img"
                                  style={{
                                    backgroundImage:
                                      'url("/resource/img/reform/icon/join_topic_img16.png")'
                                  }}
                                />
                                <div className="mtalk-name">
                                  오늘의 추천 톡
                                </div>
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
              <div
                className="scroll-section section6"
                data-section-title="\uB354 \uB9CE\uC740 \uD61C\uD0DD \uBCF4\uAE30"
              >
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
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/icon/ico_benefit_stock.png"}
                              alt
                            />
                          </div>
                        </div>
                        <a className="tap-link" href="#one">
                          <div className="col-cont">
                            <div className="txt-eyebrow">Kbank 6주년</div>
                            <div className="txt-ttl">
                              1만개의 선물이 쏟아집니다
                            </div>
                          </div>
                          <div className="col-state">
                            <i
                              className="ico-arrow-link"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="img-figure">
                          <div className="label">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/icon/ico_benefit_carrot.png"}
                              alt
                            />
                          </div>
                        </div>
                        <a className="tap-link" href="#one">
                          <div className="col-cont">
                            <div className="txt-eyebrow">최대 100배!</div>
                            <div className="txt-ttl">
                              신용점수만큼 현금으로 드릴게요
                            </div>
                          </div>
                          <div className="col-state">
                            <i
                              className="ico-arrow-link"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="img-figure">
                          <div className="label">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/icon/ico_benefit_luckygift.png"}
                              alt
                            />
                          </div>
                        </div>
                        <a className="tap-link" href="#one">
                          <div className="col-cont">
                            <div className="txt-eyebrow">
                              지금 바로 전국 세븐일레븐 습격!
                            </div>
                            <div className="txt-ttl">
                              하나만 사도,두 개 사도 50% 할인
                            </div>
                          </div>
                          <div className="col-state">
                            <i
                              className="ico-arrow-link"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="img-figure">
                          <div className="label">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/icon/ico_benefit_congratulate.png"}
                              alt
                            />
                          </div>
                        </div>
                        <a className="tap-link" href="#one">
                          <div className="col-cont">
                            <div className="txt-eyebrow">
                              반려동물 지킴이
                            </div>
                            <div className="txt-ttl">
                              신세계 상품권 최대 3만원 받기
                            </div>
                          </div>
                          <div className="col-state">
                            <i
                              className="ico-arrow-link"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="img-figure">
                          <div className="label">
                            <img
                              src={process.env.PUBLIC_URL+"/resource/img/reform/icon/ico_benefit_stock.png"}
                              alt
                            />
                          </div>
                        </div>
                        <a className="tap-link" href="#one">
                          <div className="col-cont">
                            <div className="txt-eyebrow">
                              주식계좌만들고
                            </div>
                            <div className="txt-ttl">
                              테슬라, 넷플릭스 주주되기
                            </div>
                          </div>
                          <div className="col-state">
                            <i
                              className="ico-arrow-link"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {}
              <div className="scroll-section section7">
                <div className="full-area">
                  <div className="video-area">
                    <video muted autoPlay playsInline ></video>
                    <p className="poster">
                      <img
                        src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/video_sec7.png"}
                        alt="poster"
                      />
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
            {}
            {}
            <div className="btn-fix-group active">
              <i className="ico-arrow-down" />
              <button className="btn-list" type="button">
                <ul></ul>
              </button>
            </div>
            {}
            <a
              href="#"
              className="fix-top"
              title="\uB9E8 \uC704\uB85C \uC774\uB3D9"
            >
              TOP
            </a>
            {}
          </div>
          {}
        </div>
      </div>
    </div>
    {}
    {}
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
              <a
                href="#"
                title="\uC790\uC138\uD788 \uBCF4\uAE30"
                className="underline"
              >
                개인정보처리방침
              </a>
            </li>
            <li className="mb5">
              <a
                href="#"
                title="\uC790\uC138\uD788 \uBCF4\uAE30"
                className="underline"
              >
                신용정보활용체제
              </a>
            </li>
            <li>
              <a href="#" title="\uC790\uC138\uD788 \uBCF4\uAE30">
                경영공시
              </a>
            </li>
            <li>
              <a href="#" title="\uC790\uC138\uD788 \uBCF4\uAE30">
                전자민원접수
              </a>
            </li>
          </ul>
        </div>
        <div className="link-center">
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                title="\uCF00\uC774\uBC45\uD06C \uD398\uC774\uC2A4\uBD81 \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30"
              >
                <img
                  src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/ic_mw_fb.svg"}
                  alt="\uD398\uC774\uC2A4\uBD81"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                title="\uCF00\uC774\uBC45\uD06C \uBE14\uB85C\uADF8 \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30"
              >
                <img
                  src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/ic_mw_blog.svg"}
                  alt="\uBE14\uB85C\uADF8"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                title="\uCF00\uC774\uBC45\uD06C \uC720\uD29C\uBE0C \uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30"
              >
                <img
                  src={process.env.PUBLIC_URL+"/resource/img/reform/mweb/new23/ic_mw_youtube.svg"}
                  alt="\uC720\uD29C\uBE0C"
                />
              </a>
            </li>
          </ul>
          <div className="copyArea layerTooltip">
            <small>Copyright Kbank. All rights reserved.</small>
            <p
              style={{
                paddingTop: "6px"
              }}
            >
              2023.07.25 준법감시인 심의필 2023-990 (유효기간 : 2023.12.31)
            </p>
            {}
          </div>
        </div>
      </div>
    </div>
    {}
  </div>
  )
}

export default products