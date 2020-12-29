import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}></div>
            <div className={style.background}></div>

        </header>
    )
}

export default Header;