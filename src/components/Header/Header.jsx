import { useState, useRef, useEffect } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";
import GiftIcon from "../../ui/icons/GiftIcon";
import MsgIcon from "../../ui/icons/MsgIcon";
import "./Header.scss";

const Header = () => {
  const socialIcons = [
    { id: 1, icon: <SearchIcon />, link: "#", label: "Search" },
    { id: 2, icon: <GiftIcon />, link: "#", label: "Gist" },
    { id: 3, icon: <MsgIcon />, link: "#", label: "Messages" },
  ];

  const menu = [
    "Casino Games",
    "Live Games",
    "TV-Bet",
    "Sport Games",
    "Virtual",
    "Tournaments",
    "Spin Shop",
    "FAQ",
    "Support Chat",
  ];

  const bodyEl = document.querySelector("body");
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuOpen(true);
    bodyEl.classList.add("body--open_menu_state");
  };

  const closeMenuHandler = () => {
    setMenuOpen(false);
    bodyEl.classList.remove("body--open_menu_state");
  };

  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      closeMenuHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__in">
        <div className="header__menu">
          <div
            className={`header__menu_in ${menuOpen ? "isopen" : ""}`}
            ref={menuRef}
          >
            <button
              className="header__menu_close"
              type="button"
              onClick={closeMenuHandler}
            >
              <img src="/images/icons/close.svg" alt="menu close icon" />
            </button>
            <img
              className="header__menu_logo"
              src="/images/logo.svg"
              alt="site logo"
            />
            <nav className="header__menu_nav">
              <ul className="header__menu_list">
                {menu.map((el) => {
                  return (
                    <li key={el} className="header__menu_item">
                      <a className="header__menu_link" href="#">
                        {el}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          className="header__menu_trigger"
          onClick={openMenuHandler}
        >
          <span></span>
        </button>
        <a href="#" className="header__logo" onClick={openMenuHandler}>
          <img src="/images/logo.svg" alt="site logo" />
        </a>
        <div className="header__user">
          <ul className="header__user_socilal_list">
            {socialIcons.map((iconItem) => (
              <li key={iconItem.id} className="header__user_socilal_item">
                <a
                  className="header__user_social_link"
                  href={iconItem.link}
                  aria-label={iconItem.label}
                >
                  {iconItem.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__user_numbers">
            <div className="header__user_numbers_number">125.02 $</div>
            <div className="header__user_numbers_percent">13%</div>
            <div className="header__user_numbers_icon">
              <img src="/images/icons/shevron.svg" alt="" />
            </div>
            <div className="header__user_numbers_plus">
              <img src="/images/icons/plus.svg" alt="" />
            </div>
          </div>

          <div className="header__user_avatar">
            <img src="/images/avatar.png" alt="user avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
