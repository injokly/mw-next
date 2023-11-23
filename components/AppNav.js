import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.css";
import { useRouter } from "next/router.js";
const AppNav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={navStyles.nav}>
      <div id="header" className="is-fix">
        <div className="header-wrap">
          <div className="header">
            <div className="mweb-main-logo">
              <Link href="/" className="logo">
                <span className="hidden">kbank</span>
              </Link>
            </div>
            <div className="mweb-main-gnb">
              <ul>
                <li>
                  <Link href="/test" className={router.pathname == "/test" ? "on" : ""}>
                    TEST
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;