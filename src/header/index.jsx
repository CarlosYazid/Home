import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { logotext, socialprofils } from "../constants.jsx";
import Themetoggle from "../components/themetoggle";

const initChatwoot = () => {
  const BASE_URL = import.meta.env.VITE_CHATWOOT_BASE_URL;
  const WEBSITE_TOKEN = import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN;
  if (!BASE_URL || !WEBSITE_TOKEN) return;

  const script = document.createElement("script");
  script.src = BASE_URL + "/packs/js/sdk.js";
  script.async = true;
  script.onload = function () {
    if (window.chatwootSDK) {
      window.chatwootSDK.run({ websiteToken: WEBSITE_TOKEN, baseUrl: BASE_URL });
    }
  };
  document.head.appendChild(script);
};

const Headermain = () => {
  const [isActive, setActive] = useState(true); // true = cerrado, false = abierto
  const navigate = useNavigate();
  const closeTimer = useRef(null);

  useEffect(() => {
    initChatwoot();
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setActive(true);
    document.body.classList.remove("ovhidden");
  }, []);

  const handleToggle = useCallback(() => {
    setActive((prev) => !prev);
    document.body.classList.toggle("ovhidden");
  }, []);

  /**
   * handleNavClick — sincroniza cierre del menú + transición de página.
   *
   * El menú sube (translateY 0 → -100%, 500ms `ease`) mientras
   * la página nueva entra desde abajo (translateY 100% → 0%, 500ms `ease`)
   * — ambas animaciones arrancan al mismo tiempo, mismo easing, mismo timing.
   * El resultado: el contenido de la página "reemplaza" visualmente al menú.
   */
  const handleNavClick = useCallback(
    (to) => (e) => {
      e.preventDefault();
      if (!isActive) closeMenu();
      navigate(to);
    },
    [isActive, closeMenu, navigate]
  );

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a
            className="navbar-brand nav_ac"
            href="/"
            onClick={handleNavClick("/")}
          >
            {logotext}
          </a>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <a href="/" onClick={handleNavClick("/")}>Home</a>
                  </li>
                  <li className="menu_item">
                    <a href="/portfolio" onClick={handleNavClick("/portfolio")}>Portfolio</a>
                  </li>
                  <li className="menu_item">
                    <a href="/about" onClick={handleNavClick("/about")}>About</a>
                  </li>
                  <li className="menu_item">
                    <a href="/contact" onClick={handleNavClick("/contact")}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <div className="d-flex legal_links">
              <a href="/privacy-policy" onClick={handleNavClick("/privacy-policy")}>
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" onClick={handleNavClick("/terms-and-conditions")}>
                Terms &amp; Conditions
              </a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;