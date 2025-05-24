'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'
import { useTranslation } from 'react-i18next'

const WhatWeDo = () => {
  const { t } = useTranslation()

  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              {t('whatWeDoSection.tag')}
            </motion.span>

            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="title"
            >
              {t('whatWeDoSection.title')}
            </motion.span>

            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="des"
            >
              {t('whatWeDoSection.description')}
            </motion.span>
          </div>

          {/* Blocks */}
          <div className="wwd-blocks">
            {/* Block 1 */}
            <div className="wwd-block">
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="sec-title"
              >
                {t('whatWeDoSection.block1.title')}
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="text"
              >
                {t('whatWeDoSection.block1.description')}
              </motion.span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                  >
                    <Image src={feature.icon} alt="feature" width={60} height={60} />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Block 2 */}
            <div className="wwd-block">
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="sec-title"
              >
                {t('whatWeDoSection.block2.title')}
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="text"
              >
                {t('whatWeDoSection.block2.description')}
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                  >
                    <Image src={feature.icon} alt="feature" width={60} height={60} />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Support block */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            <div>
              <span className="sec-title">{t('whatWeDoSection.support.title')}</span>
              <span className="des">{t('whatWeDoSection.support.description')}</span>
            </div>
            <div>
              <span className="text">{t('whatWeDoSection.support.point1')}</span>
              <span className="text">{t('whatWeDoSection.support.point2')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
