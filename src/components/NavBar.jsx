import React, { Component } from "react";
import "./NavBar.css";

// import cv from './'
// import React, { useState } from 'react';

function NavBar({ soon, setSoon, leng, setLeng }) {
const [menu, setMenu] = React.useState(false);
const openMenu = () => {
    setMenu(!menu)
}

  const chengeTheme = () => {
    setSoon(!soon)
  };

  const chengeLeng = () => {
    setLeng(!leng)
  };

  // state={clicked: false}
  // handleClick = () =>{
  // this.setState({clicked: !this.state.clicked})
  // }
  // render(){
  return (
    // className={soon ? "cv_body light-theme" : "cv_body dark-theme"
    // className="cv_body wrapper"

    <nav className={soon ? 'light-theme-nav' : 'dark-theme-nav'}>
      <div className={soon ? 'DS light-theme-a' : 'DS dark-theme-a'} href="#">
        <img className="img_cv" src="./cv.png" alt="cv" />
        <div className="name">
          <h1>{leng ? 'Shapiro Daniel 🇮🇱' : 'Шапиро Даниэль 🇮🇱'}</h1>
          <h2>{leng ? '26 years' : '26 лет'}</h2>
          <h3>{leng ? 'Swift and React developer' : 'Swift и React разработчик'}</h3>
        </div>
      </div>
      
      <div className="flex">
      <div className={soon ? 'light-theme-color' : 'dark-theme-color'}>
        <ul style={soon ? {background:  "#79AF8E"} : {background:  "#1A0A52"}} id='navbar' className={menu ? '#navbar active' : '#navbar' || 'light-theme-bg'}>
        {/* <ul id="navbar" className="#navbar active"> */}
          <li>
            <a className={soon ? 'light-theme-color' : 'dark-theme-color'} href="#">{leng ? 'Сontacts' : 'Контакты'}</a>
          </li>
          <li>
            <a href="#">{leng ? 'Skills' : 'Навыки'}</a>
          </li>
          <li>
            <a href="#">{leng ? 'My projects' : 'Мои проекты'}</a>
          </li>
          <li>
            <a href="#Education">{leng ? 'Education' : 'Образование'}</a>
          </li>
        </ul>
      </div>
      <div className="themeAndLangvish">
        <button onClick={chengeTheme} className="theme">
          <svg
          className={soon ? "moon " : "active-theme moon"}
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0972 2.53039C12.2913 2.8649 12.2752 3.28136 12.0557 3.5998C11.3898 4.56594 11 5.73595 11 7.00002C11 10.3137 13.6863 13 17 13C18.2641 13 19.4341 12.6102 20.4002 11.9443C20.7187 11.7249 21.1351 11.7087 21.4696 11.9028C21.8041 12.0969 21.9967 12.4665 21.9642 12.8519C21.5313 17.9765 17.236 22 12 22C6.47715 22 2 17.5229 2 12C2 6.76398 6.02351 2.46874 11.1481 2.03585C11.5335 2.0033 11.9031 2.19588 12.0972 2.53039ZM9.42424 4.42352C6.26994 5.49553 4 8.48306 4 12C4 16.4183 7.58172 20 12 20C15.517 20 18.5045 17.7301 19.5765 14.5758C18.7676 14.8508 17.9008 15 17 15C12.5817 15 9 11.4183 9 7.00002C9 6.09922 9.1492 5.2324 9.42424 4.42352Z"
                fill="#000000"
              />{" "}
            </g>
          </svg>

          <svg
            className={soon ? "sun active-theme" : "sun"}
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H5M5.00006 19L7.00006 17M12 19V21M17 17L19 19M5 5L7 7M19 12H21M16.9999 7L18.9999 5M12 3V5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={chengeLeng} className="lang">
            <div>

            
            <p className={leng ? "active-leng" : ""}>
                EN
            </p>
            <span>|</span>
            <p className={leng ? "" : "active-leng"}>
                RU
            </p>
            </div>

        </button>
      </div>
      </div>

      <div id="mobile" className={soon ? 'DS light-theme-a' : 'DS dark-theme-a'}>
        <i id='bar' onClick={openMenu} className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
        {/* <i id="bar" className="fas fa-bars"></i> */}
      </div>
    </nav>
  );
}
// }

export default NavBar;
