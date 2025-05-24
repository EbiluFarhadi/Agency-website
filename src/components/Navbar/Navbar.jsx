"use client";

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../../../i18n.client';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  // ✅ hydration-safe fix
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('i18nextLng', lng);
  };

  // ⛔️ Prevent rendering until client is mounted to avoid mismatch
  if (!mounted) return null;

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>COTEK TECH</span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true} >
                <span>{t('whatWeDo')}</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100} >
                <span>{t('howItWorks')}</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth >
                <span>{t('whoWeInvestIn')}</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100} >
                <span>{t('testimonials')}</span>
              </Link>
            </div>
            <div className="fund-button">
              {t('getFunded')}
            </div>
            {/* language switcher */}
            <div className="lang-switch">
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('fa')}>FA</button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="nm-container">
        <span>COTEK TECH</span>
        {
          !mobileMenuOpened ?
            <BiMenuAltRight
              size={30}
              onClick={() => setMobileMenuOpened(true)}
            /> :
            <RxCross2
              size={30}
              onClick={() => setMobileMenuOpened(false)}
            />
        }

        <div className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>{t('whatWeDo')}</span>
          <span>{t('howItWorks')}</span>
          <span>{t('whoWeInvestIn')}</span>
          <span>{t('testimonials')}</span>
          <div className="m-funded-button">
            {t('getFunded')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
