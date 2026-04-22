import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../constants.jsx";
import Themetoggle from "../components/themetoggle";

// Chatwoot initialization
const initChatwoot = () => {

  const BASE_URL = import.meta.env.REACT_APP_CHATWOOT_BASE_URL;
  const WEBSITE_TOKEN = import.meta.env.REACT_APP_CHATWOOT_WEBSITE_TOKEN;

  if (!BASE_URL || !WEBSITE_TOKEN) {
    console.warn("Chatwoot env vars not set (REACT_APP_CHATWOOT_BASE_URL, REACT_APP_CHATWOOT_WEBSITE_TOKEN)");
    return;
  }

  const script = document.createElement("script");
  script.src = BASE_URL + "/packs/js/sdk.js";
  script.async = true;
  script.onload = function () {
    if (window.chatwootSDK) {
      window.chatwootSDK.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
    }
  };
  document.head.appendChild(script);
};

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    // Initialize Chatwoot once on mount
    initChatwoot();
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
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
              <Link onClick={handleToggle} to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link onClick={handleToggle} to="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
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
