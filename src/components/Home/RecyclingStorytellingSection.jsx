import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRecycle,
  FaFilter,
  FaCogs,
  FaWind,
  FaSync,
  FaProjectDiagram,
  FaMicroscope,
  FaGlobeAmericas,
} from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import styles from './RecyclingStorytellingSection.module.css';

export const RecyclingStorytellingSection = () => {
  const { t } = useTranslation();

  const storySteps = [
    {
      stepNum: '01',
      title: t('process.step1', 'Collect Pre-Consumer Textile Waste'),
      desc: t('process.step1Desc', 'High-quality garment cutting waste is collected from trusted manufacturing partners before it reaches consumers.'),
      badge: '100% Ethical Sourcing',
      icon: <FaRecycle />,
      image: '/images/recycled_fibres.svg',
    },
    {
      stepNum: '02',
      title: t('process.step2Title', 'Sorting & Quality Inspection'),
      desc: t('process.step2Desc', 'Every batch is carefully sorted based on colour, fibre composition, and quality to ensure consistent recycling results.'),
      badge: 'Shade & Composition Audit',
      icon: <FaFilter />,
      image: '/images/recycled_fibres.svg',
    },
    {
      stepNum: '03',
      title: t('process.step3Title', 'Mechanical Fibre Recovery'),
      desc: t('process.step3Desc', 'The textile waste is opened into reusable fibres using advanced mechanical recycling technology without unnecessary chemical processing.'),
      badge: 'Zero Chemical Solvents',
      icon: <FaCogs />,
      image: '/images/factory_spinning.svg',
    },
    {
      stepNum: '04',
      title: t('process.step4Title', 'Fibre Preparation & Alignment'),
      desc: t('process.step4Desc', 'Recovered fibres are cleaned, aligned, and prepared for spinning to achieve uniform quality and reliable performance.'),
      badge: 'Micro-Denier Precision',
      icon: <FaWind />,
      image: '/images/recycled_yarns.svg',
    },
    {
      stepNum: '05',
      title: t('process.step5Title', 'Yarn Manufacturing & Ring Spinning'),
      desc: t('process.step5Desc', 'Prepared fibres are transformed into premium recycled yarns using advanced ring spinning technology across count ranges.'),
      badge: 'Swiss Rieter Technology',
      icon: <FaSync />,
      image: '/images/factory_spinning.svg',
    },
    {
      stepNum: '06',
      title: t('process.step6Title', 'Fabric Manufacturing & Weaving'),
      desc: t('process.step6Desc', 'The recycled yarn is converted into knitted and woven fabrics suitable for apparel, home textiles, and industrial applications.'),
      badge: 'Waterless Dope Dyeing',
      icon: <FaProjectDiagram />,
      image: '/images/recycled_fabrics.svg',
    },
    {
      stepNum: '07',
      title: t('process.step7Title', 'Quality Assurance & Spectrophotometry'),
      desc: t('process.step7Desc', 'Every batch undergoes rigorous lab testing for tensile strength, color fastness, and purity before dispatch.'),
      badge: 'Uster Analytical Testing',
      icon: <FaMicroscope />,
      image: '/images/recycled_yarns.svg',
    },
    {
      stepNum: '08',
      title: t('process.step8Title', 'Delivered to Global Customers'),
      desc: t('process.step8Desc', 'Premium recycled fibres, yarns, and fabrics are supplied to leading fashion brands and industrial partners across 45+ countries.'),
      badge: '45+ Global Export Markets',
      icon: <FaGlobeAmericas />,
      image: '/images/recycled_fabrics.svg',
    },
  ];

  return (
    <section className={styles.storySectionWrapper}>
      {/* Dynamic Adaptive Engineering Grid */}
      <GridBackground variant="grid" dark={true} opacity={0.08} />

      {/* Atmospheric Glowing Orbs */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <SectionTitle
          label="OUR PROCESS"
          title="From Textile Waste to Premium Recycled Products"
          subtitle="Follow the complete transformation journey of pre-consumer textile waste into high-quality recycled fibres, yarns, and fabrics through our integrated manufacturing ecosystem."
        />

        {/* Interactive Vertical Timeline */}
        <div className={styles.timelineContainer}>
          {/* Vertical Center Track & Glowing Progress Line */}
          <div className={styles.centerTimelineTrack} />
          <div className={styles.centerTimelineProgress} style={{ height: '100%' }} />

          {storySteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.stepNum}
                className={`${styles.timelineRow} ${
                  isEven ? styles.timelineRowLeft : styles.timelineRowRight
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Center Node Icon Marker */}
                <div className={styles.centerNode}>
                  <div className={styles.nodeIconBox}>{step.icon}</div>
                </div>

                {/* Content Box Column */}
                <div className={styles.contentCol}>
                  <div className={styles.cardBox}>
                    <span className={styles.stepBadge}>STEP {step.stepNum}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                    <span className={styles.specChip}>✦ {step.badge}</span>
                  </div>
                </div>

                {/* Visual Image Column */}
                <div className={styles.visualCol}>
                  <div className={styles.visualCard}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className={styles.stepImg}
                      onError={(e) => { e.currentTarget.src = '/images/factory_spinning.svg'; }}
                    />
                    <div className={styles.imgOverlay} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
