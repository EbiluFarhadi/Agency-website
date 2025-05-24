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
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants()}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial="initial"
                      animate="animate"
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants()}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial="initial"
                      animate="animate"
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
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
