import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { SectionTitle } from '../components/Common/SectionTitle';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './FacilitiesPage.module.css';

export const FacilitiesPage = () => {
  const { t } = useTranslation();

  const facilityTypingPhrases = [
    '500,000 Sq. Ft. Eco Industrial Complex.',
    'Swiss Rieter Ring Spinning Technology.',
    'Uster Quality Control & Spectrophotometry.',
  ];

  const machines = [
    {
      name: 'Rieter Ring Spinning Lines',
      specs: 'Over 50,000 High-Speed Spindles',
      desc: 'Swiss-engineered ring spinning frames with auto-doffing, individual spindle monitoring, and compact yarn attachments.',
      image: 'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Trützschler High-Production Carding',
      specs: 'TC-19i Smart Carding Units',
      desc: 'Automatic nep-control sensors and continuous web monitoring ensure micro-denier staple fibre alignment.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Uster Spectro-Quality Testing Lab',
      specs: 'Uster Tester 6 & Tensorapid 5',
      desc: 'Climate-controlled analytical lab conducting 100% online capacitive quality testing for yarn unevenness, hairiness, and tensile strength.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=800&auto=format&fit=crop', title: 'Automated Ring Spinning Hall' },
    { src: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop', title: 'Recycled Yarn Spool Storage' },
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', title: 'Trützschler Carding Machinery' },
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', title: 'Spectrophotometric Testing Lab' },
  ];

  return (
    <div className={styles.facilitiesWrapper}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('facilities.badge', 'Industrial Infrastructure')}</span>
          <h1 className={styles.headerTitle}>
            {t('facilities.title', 'World-Class Automated Manufacturing Facilities')}
          </h1>
          <p className={styles.headerSubtitle}>
            Spanning over 500,000 sq. ft. of eco-zone industrial space equipped with European automated spinning and carding lines.{' '}
            <span className={styles.typingSub}>
              <TypingText phrases={facilityTypingPhrases} speed={60} delay={2200} />
            </span>
          </p>
        </div>
      </section>

      {/* Machine Cards Section */}
      <section className={`section-padding ${styles.machinesSection}`}>
        <GridBackground variant="grid" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="AUTOMATED MACHINERY"
            light={true}
            title={
              <>
                High-Precision Manufacturing (<AnimatedCounter value="50" suffix="K+" duration={2} /> Spindles)
              </>
            }
          />

          <div className={styles.machineGrid}>
            {machines.map((m, idx) => (
              <motion.div
                key={m.name}
                className={styles.machineCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imgBox}>
                  <img src={m.image} alt={m.name} className={styles.img} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.specsBadge}>{m.specs}</span>
                  <h3 className={styles.mName}>{m.name}</h3>
                  <p className={styles.mDesc}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      <section className={`section-padding ${styles.gallerySection}`}>
        <GridBackground variant="dots" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="FACTORY GALLERY"
            title="Inside Avantee Facilities"
          />

          <div className={styles.galleryGrid}>
            {galleryImages.map((g, idx) => (
              <motion.div
                key={idx}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                data-cursor="view"
                data-cursor-text="View"
              >
                <img src={g.src} alt={g.title} className={styles.gImg} />
                <div className={styles.gOverlay}>
                  <span className={styles.gTitle}>{g.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
