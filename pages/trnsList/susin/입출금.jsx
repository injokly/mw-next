import React from "react";
import styles from './입출금.module.css';

const 입출금 = ({ item }) => {
  return (
    <div className={[styles['ui-kbank-page-control'], styles['activeSlide']]} data-status-text="light">
    <div className={styles['page-inner-scroll']}>
      <div className={styles['container-component']}>
        <div className={[styles['component-header'], styles['bg-primary1']]}>
          <div className={styles['header-group']}>
            <div className={styles['header-content']}>
              <a className={styles['btn-back']} href="#">
                <i className={[styles['ico-back'], styles['white']]} aria-hidden="true"></i>
                <span className={styles['hide-txt']}>이전</span>
              </a>
              <h1 className={styles['tit-header']}>
                <span>상품명 명칭</span>
              </h1>
              <a className={styles['btn-control']} href="#none">
                <span>관리</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles['component-card-bg']}>
          <div className={[styles['card-layout-group'], styles['bg-primary1']]}>
            <div className={styles['card-header']}>
              <div className={styles['card-account-tit']}>상품명or별칭(최대15자)
                <div className={[styles['tag'], styles['account']]}>
                  <span className={[styles['txt'], styles['real-black']]}>생활금리</span>
                </div>
              </div>
              <div className={styles['card-account-num']}>324763-345-3453425</div>
            </div>
            <div className={styles['card-row-main']}>
              <div className={styles['card-col-content']}>
                <div className={styles['sum-num']}>1,000,000,000원</div>
              </div>
            </div>

            <div className={[styles['card-row-txt'], styles['flex-right']]}>
              <div className={styles['card-col-tit']}>
                이체가능금액
                <div>
                  <span>1,000,000,000</span>원
                </div>
              </div>
            </div>

            <div className={[styles['card-row-txt'], styles['flex-right']]}>
              <div className={styles['card-col-tit']}>
                <div className={[styles['tag'], styles['bg-dark']]}>
                  <i className={styles['ico-coin']} aria-hidden="true"></i>

                  <div className={styles['txt']}><span className={styles['bold']}>캐시백</span> 도전중</div>
                </div>
                평균잔액
                <div>
                  <span>1,000,000,000</span>원
                  <i className={styles['ico-arrow-link']} aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className={[styles['card-row-txt'], styles['flex-right']]}>
              <div className={styles['card-col-tit']}>
                <div className={[styles['tag'], styles['bg-dark']]}>
                  <i className={styles['ico-coin']} aria-hidden="true"></i>
                  <div className={styles['txt']}><span className={styles['bold']}>캐시백</span> 이벤트</div>
                </div>
                <div>
                  <span>도전하기</span>
                  <i className={styles['ico-arrow-link']} aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className={[styles['card-row-txt'], styles['flex-right']]}>
              <div className={styles['card-col-tit']}>
                <div className={[styles['txt'], styles['white']]}>불러오는 중...</div>
              </div>
            </div>


            <div className={styles['btn-group']}>
              <button className={styles['btn-lv02']} type="button">
                <span className={styles['txt']}>가져오기</span>
              </button>
              <a className={styles['btn-lv02']} href="#none">
                <span className={styles['txt']}>이체하기</span>
              </a>
            </div>

            <div className={styles['btn-group']}>
              <button className={styles['btn-lv02']} type="button">
                <span className={styles['txt']}>용돈 조르기</span>
              </button>
              <a className={styles['btn-lv02']} href="#none">
                <span className={styles['txt']}>이체하기</span>
              </a>
            </div>

          </div>

          <div className={[styles['card-layout-group'], styles['fixed'], styles['bg-primary1']]} style="display:none">
            <div className={styles['card-row']}>
              <div className={styles['card-col-tit']}>잔액</div>
              <div className={styles['card-col-content']}>1,000,000,000원</div>
            </div>
          </div>
        </div>
        <div className={[styles['component-search'], styles['no-space']]}>
          <div className={styles['account-search-group']}>
            <button className={styles['btn-search']} type="button">
              <span className={styles['hide-txt']}>검색</span>
              <i className={styles['ico-search-list']} aria-hidden="true"></i>
            </button>
            <div className={styles['btn-keyword-area']}>
              <button className={styles['btn-keyword']} type="button">
                <span className={styles['txt']}>자동이체</span>
                <i className={styles['ico-delete']} aria-hidden="true"></i>
              </button>
            </div>
            <button className={styles['btn-select']} type="button">
              <span>전체·입출금·최신순</span>
              <i className={styles['ico-arrow-open']} aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className={[styles['component-list-deal'], styles['no-space']]}>
          <div className={styles['list-deal-group']}>
            <ul className={styles['list-row']}>
              <li className={styles['list-item']}>
                <button className={styles['section-tap']} type="button">
                  <div className={styles['row-head']}>
                    <div className={styles['area-date']}>
                      <span className={styles['txt-date']}>12.12</span>
                      <span className={styles['txt-time']}>05:00</span>
                    </div>
                  </div>
                  <div className={styles['row-tit']}>
                    <span className={styles['txt-detail']}>적요 최대 열글자</span>
                    <span className={[styles['txt-amount'], styles['secondary1-1']]}>
                      <strong>+100,000,000</strong>
                      <strong>원</strong>
                    </span>
                  </div>
                  <div className={styles['row-state']}>
                    <span className={styles['txt-memo']}>
                      <span className={styles['txt']}>메모(최대 15자)</span>
                    </span>
                    <span className={styles['txt-sum']}>잔액<em>1,000,000,000</em>
                      <strong>원</strong>
                    </span>
                  </div>
                </button>
              </li>
              <li className={styles['list-item']}>
                <button className={styles['section-tap']} type="button">
                  <div className={styles['row-head']}>
                    <div className={styles['area-date']}>
                      <span className={styles['txt-date']}>12.12</span>
                      <span className={styles['txt-time']}>05:00</span>
                    </div>
                  </div>
                  <div className={styles['row-tit']}>
                    <span className={styles['txt-detail']}>적요 최대 열글자</span>
                    <span className={styles['txt-amount']}>
                      <strong>-100,000,000</strong>
                      <strong>원</strong>
                    </span>
                  </div>
                  <div className={styles['row-state']}>
                    <span className={styles['txt-memo']}>
                      <span className={styles['txt']}>메모(최대 15자)</span>
                    </span>
                    <span className={styles['txt-sum']}>잔액<em>1,000,000,000</em>
                      <strong>원</strong>
                    </span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles['component-nodata']}>
          <div className={styles['nodata-statement-group']}>
            <p className={styles['txt-lv01']}>거래내역이 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default 입출금;