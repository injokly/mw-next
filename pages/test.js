import React from "react";
import Link from "next/link";
import HeadInfo from "@/components/HeadInfo";

const test = () => {
  return (
    <>
      <div class="content type-renewal">
        <div class="component-product-list">
          <div class="title-group">
            <div
              class="title-field-page"
              style={{
                paddingTop: "30px",
              }}
            >
              테스트
            </div>
          </div>
          <div class="main-tab-container">
            <div class="main-tab-content">
              <div class="container-component frm-prd pb0">
                <div class="product-list-group">
                  <ul>
                    <li>
                      <a href="https://m.kbanknow.com/ib20/mnu/MWBMAN020000" className="tap-link">
                        <em>
                          운영중인 모바일웹 상품 페이지<span>기존 앱 호출하기</span>
                        </em>
                      </a>
                    </li>
                    <li>
                      <Link href="/components">
                        <em>
                          컴포넌트 설계하고 개발하는 페이지
                          <span>컴포넌트 TEST</span>
                        </em>
                      </Link>
                    </li>
                    <li>
                      <Link href="/txList">
                        <em>
                          Compound Coponent Design Pattern
                          <span>거래내역 컴포넌트 by Anima</span>
                        </em>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trnsList/susin">
                        <em>
                          운영중인 css를 활용하여 컴포넌트 만들기
                          <span>입출금 거래내역 페이지</span>
                        </em>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trnsList/loan">
                        <em>
                          운영중인 css를 활용하여 컴포넌트 만들기
                          <span>대출 거래내역 페이지</span>
                        </em>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default test;
