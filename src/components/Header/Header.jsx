import React, { useState } from "react";
import ProductLogo from "../../assets/images/product-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faCartShopping, faChevronDown, faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import "./Header.scss";
import {Link} from "react-router-dom";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  let [hamburgerIcon, sethamburgerIcon] = useState(true);
    let currentIcon = faBars;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    sethamburgerIcon(!hamburgerIcon);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-wrapper">
          <div className="header__hamburger">
            <a href="#">
              <FontAwesomeIcon icon={hamburgerIcon ? faBars:faXmark} onClick={toggleMenu} />
            </a>
          </div>
          <div className="header__left-wrapper__logo">
            <a href="#"><img src={ProductLogo} alt="boat-logo" /></a>
          </div>
          <nav className={showMenu ? "hamburger-nav active" : "hamburger-nav"}>
            <ul className="header__left-wrapper__nav-list">
            <li>
                <a className="header__left-wrapper__nav-item" href="#">
                <Link to= "/">Home</Link>
                </a>
              </li>
              <li className="sub-menu">
                <a className="header__left-wrapper__nav-item" href="#">
                  Categories
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
                <div className="sub-menu__wrapper">
                <ul className="sub-menu__header">
                  <li>
                    <a className="sub-menu__header-item" href="#">
                      smart watches
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu__header-item" href="#">
                      wireless earbuds
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu__header-item" href="#">
                      neackbands
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu__header-item" href="#">
                      headphones
                    </a>
                  </li>
                  <li>
                    <a className="sub-menu__header-item" href="#">
                      wireless speakers
                    </a>
                  </li>
                </ul>
                </div>
              </li>
              
              <li>
                <a className="header__left-wrapper__nav-item" href="#">
                <Link to= "/contact">Contact</Link>
                </a>
              </li>
              <li>
                <a className="header__left-wrapper__nav-item" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right-wrapper">
          <form className="header__right-wrapper__searchform">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            <input type="text" name="search" placeholder="Search.." />
          </form>

          <div className="header__right-wrapper__icons">
            <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
