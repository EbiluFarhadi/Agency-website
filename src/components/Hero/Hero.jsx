"use client"

import React, { useEffect, useState } from 'react';
import './Hero.css';
import EmailBox from '../EmailBox/EmailBox';
import { HeroData } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }
  }, [i18n]);

  const variants = (delay) => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  if (!ready) return null; // 🛑 Don’t render until i18n is ready

  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="" className="h-arrow" />
        <div className="h-container">
          <div className="h-left">
            <div className="image-row">
              <div className="hero-image-wrapper">
                <motion.img
                  initial="initial"
                  animate="animate"
                  variants={imgVariants()}
                  src="/hero/person01.jpeg"
                  alt="Me working"
                  className="hero-main-image"
                />
              </div>
            </div>

            <div className="image-row">
          </div>

          </div>

          <div className="h-right">
            <div className="h-title">
              <span>{t('hero.title.line1')}</span>
              <span>{t('hero.title.line2')}</span>
              <span>{t('hero.title.line3')}</span>
            </div>

            <div className="h-description">
              {t('hero.description')}
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
