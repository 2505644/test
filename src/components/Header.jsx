import React from 'react'
import logo from '../img/logo.svg'
import color from '../img/color.svg'
const Header = () => {
  return (
    <header className="header">
            <a class="header__logo" href="#">
              <img src={logo} />
            </a>
            <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">О нас</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Услуги</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Проекты</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Блог</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Контакты</a>
              </li>
            </ul>
            </div>
            <a class="header__colour" href="#">
              <img src={color} />
            </a>
          </header>
  )
}

export default Header
