import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href="/">
                    케이뱅크
                </Link>
            </li>
            <li>
                <Link href="/products">
                    상품
                </Link>
            </li>
            <li>
                <Link href="/gifts">
                    혜택
                </Link>
            </li>
        </ul>
        </nav>

    )
}

export default Nav