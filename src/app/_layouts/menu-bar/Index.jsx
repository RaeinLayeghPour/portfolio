"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const MenuBarModule = () => {
  const [toggle, setToggle] = useState(false);
  const asPath = usePathname();
  const [curLabel, setCurLabel] = useState(0);

  const isPathActive = (path) => {
    return (asPath.indexOf(path) !== -1) && asPath === path;
  };

  const menuOpen = () => {
    setToggle(!toggle);
    const artContent = document.querySelector('.art-content');
    if (artContent) {
      if (!toggle) {
        artContent.classList.add('art-active');
      } else {
        artContent.classList.remove('art-active');
      }
    }
  };

  useEffect(() => {
    setToggle(false);
    const artContent = document.querySelector('.art-content');
    if (artContent && toggle) {
      artContent.classList.remove('art-active');
    }
    AppData.header.menu.forEach((item) => {
      if (isPathActive(item.link)) setCurLabel(item);
    });
  }, [asPath]);

  return (
    <>
      {/* menu bar */}
      <div className="art-menu-bar-fix">
        <div className={`art-menu-bar ${toggle ? "art-active" : ""}`}>

          {/* menu bar frame */}
          <div className="art-menu-bar-frame">

            {/* menu bar header */}
            <div className="art-menu-bar-header">
              <div
                className={`art-menu-bar-btn ${toggle ? "art-active" : ""}`}
                onClick={menuOpen}
              >
                <span></span>
              </div>
            </div>

            {/* scroll frame */}
            <div className="art-scroll-frame">

              {/* menu */}
              <nav id="swupMenu">
                <ul className="main-menu">
                  {AppData.header.menu.map((item, index) => (
                    <li
                      className={`menu-item ${isPathActive(item.link) ? "current-menu-item" : ""}`}
                      key={`header-menu-item-${index}`}
                    >
                      <Link href={item.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* language switcher */}
              <ul className="art-language-change">
                <li><a href="?lang=fr">FR</a></li>
                <li className="art-active-lang"><a href="?lang=en">EN</a></li>
              </ul>

            </div>

            {/* current page label */}
            <div className="art-current-page">
              {curLabel !== 0 ? (
                <Link href={curLabel.link}>{curLabel.label}</Link>
              ) : (
                <Link href="/">Home</Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBarModule;
