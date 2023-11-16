import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
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
                                <a href="https://m.kbanknow.com/ib20/mnu/MWBMAN020000" className="tap-link">앱 상품</a>
                                </li>
                                <li>
                                    <Link href="/products">상품</Link>
                                </li>
                                <li>
                                    <Link href="/gifts">혜택</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav