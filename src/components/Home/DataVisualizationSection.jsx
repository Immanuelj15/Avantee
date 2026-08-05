import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRecycle,
  FaGlobe,
  FaBuilding,
  FaShieldAlt,
  FaCheckCircle,
  FaChartPie,
  FaIndustry,
  FaWater,
  FaLeaf,
  FaBolt,
  FaCloudSun,
  FaCogs,
  FaFilter,
  FaWind,
  FaSync,
  FaProjectDiagram,
  FaTruckLoading,
} from 'react-icons/fa';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import { AnimatedCounter } from '../Common/AnimatedCounter';
import styles from './DataVisualizationSection.module.css';

export const DataVisualizationSection = () => {
  // 1. KPI Cards Data
  const kpis = [
    { target: 50000, suffix: '+', label: 'Tons Recycled', icon: <FaRecycle /> },
    { target: 25, suffix: '+', label: 'Countries Served', icon: <FaGlobe /> },
    { target: 500, suffix: '+', label: 'Business Clients', icon: <FaBuilding /> },
    { target: 99, suffix: '%', label: 'Quality Assurance', icon: <FaShieldAlt /> },
    { target: 100, suffix: '%', label: 'Pre-Consumer Waste', icon: <FaCheckCircle /> },
  ];

  // 2. Product Portfolio Doughnut Data
  const portfolioData = [
    { label: 'Recycled Fibres', pct: 35, color: '#D9B65D' },
    { label: 'Recycled Yarns', pct: 40, color: '#1B7F5B' },
    { label: 'Recycled Fabrics', pct: 25, color: '#DDF5E5' },
  ];

  // 3. Application Industries Horizontal Bar Data
  const applications = [
    { name: 'Fashion Apparel', val: 88 },
    { name: 'Home Textiles', val: 76 },
    { name: 'Industrial Textiles', val: 65 },
    { name: 'Sportswear', val: 82 },
    { name: 'Children Wear', val: 58 },
    { name: 'Accessories', val: 45 },
  ];

  // 4. Sustainability Impact 4 Progress Rings
  const sustainRings = [
    { label: 'Water Saving', pct: 82, icon: <FaWater /> },
    { label: 'Waste Recovery', pct: 95, icon: <FaLeaf /> },
    { label: 'Energy Efficiency', pct: 76, icon: <FaBolt /> },
    { label: 'Carbon Reduction', pct: 68, icon: <FaCloudSun /> },
  ];

  // 5. Recycling Process Flow Steps
  const processSteps = [
    { num: '01', title: 'Waste Sourcing', icon: <FaRecycle /> },
    { num: '02', title: 'Sorting Audit', icon: <FaFilter /> },
    { num: '03', title: 'Fibre Recovery', icon: <FaCogs /> },
    { num: '04', title: 'Fibre Alignment', icon: <FaWind /> },
    { num: '05', title: 'Yarn Spinning', icon: <FaSync /> },
    { num: '06', title: 'Fabric Weaving', icon: <FaProjectDiagram /> },
    { num: '07', title: 'Global Delivery', icon: <FaTruckLoading /> },
  ];

  // 6. Global Sourcing Pins
  const globalPins = [
    { country: 'India', role: '500,000 Sq. Ft. Primary Eco Complex' },
    { country: 'Vietnam', role: 'Apparel Spinning Partner Hub' },
    { country: 'UAE', role: 'Middle East Regional Logistics Depot' },
    { country: 'Cambodia', role: 'Garment Waste Recycling Facility' },
    { country: 'USA', role: 'North America Distribution & Sales' },
    { country: 'Central America', role: 'Nearshoring Apparel Supply Chain' },
  ];

  // 7. Manufacturing Capacity Vertical Bars
  const capacities = [
    { label: 'Recycled Fibres', val: '20K Tons', pct: 100 },
    { label: 'Recycled Yarns', val: '18K Tons', pct: 90 },
    { label: 'Recycled Fabrics', val: '12K Tons', pct: 60 },
  ];

  // 9. Why Avantee Infographics
  const whyInfographics = [
    { badge: '100%', title: 'Quality Checked', desc: 'Online capacitive Uster analytical labs for purity & tensile strength.' },
    { badge: '24/7', title: 'Continuous Production', desc: 'Operating on Swiss Rieter & German Trützschler automated lines.' },
    { badge: '25+', title: 'Export Destinations', desc: 'Supplying GRS-certified materials across 45+ international markets.' },
    { badge: 'ECO', title: 'Integrated Ecosystem', desc: 'Complete zero-waste mechanical recycling from staple to finished fabric.' },
    { badge: '100%', title: 'Global Supply', desc: 'Guaranteed supply chain consistency and transparent GRS auditing.' },
    { badge: '4.0', title: 'Advanced Machinery', desc: 'Zero-water dope-dyeing masterbatch processes reducing carbon emissions.' },
  ];

  return (
    <section className={styles.vizSectionWrapper}>
      <GridBackground variant="blueprint" dark={true} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <SectionTitle
            label="MANUFACTURING & SUSTAINABILITY DATA"
            title="Quantifiable Excellence & Global Impact"
            subtitle="Explore our real-time metrics across production capacity, circular waste recovery, and global distribution logistics."
          />
        </div>

        {/* SECTION 1: OUR GLOBAL IMPACT (5 KPI CARDS) */}
        <div className={styles.kpiGrid}>
          {kpis.map((k, idx) => (
            <motion.div
              key={k.label}
              className={`${styles.glassCard} ${styles.kpiCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardSpotlightGlow} />
              <div className={styles.kpiVal}>
                <AnimatedCounter target={k.target} suffix={k.suffix} />
              </div>
              <div className={styles.kpiLabel}>{k.label}</div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 2 & 8: CHARTS DUAL ROW (Portfolio & Capacity) */}
        <div className={styles.chartsDualRow}>
          {/* Section 2: Doughnut Chart */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaChartPie className={styles.chartTitleIcon} />
              Product Portfolio Distribution
            </h3>

            <div className={styles.doughnutFlex}>
              <div className={styles.doughnutSvgWrapper}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  {/* Fibres 35% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#D9B65D"
                    strokeWidth="16"
                    strokeDasharray="83.7 238.7"
                    strokeDashoffset="0"
                  />
                  {/* Yarns 40% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#1B7F5B"
                    strokeWidth="16"
                    strokeDasharray="95.5 238.7"
                    strokeDashoffset="-83.7"
                  />
                  {/* Fabrics 25% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="#DDF5E5"
                    strokeWidth="16"
                    strokeDasharray="59.7 238.7"
                    strokeDashoffset="-179.2"
                  />
                </svg>

                <div className={styles.doughnutCenterText}>
                  <span className={styles.centerVal}>100%</span>
                  <span className={styles.centerSub}>CIRCULAR</span>
                </div>
              </div>

              <div className={styles.legendList}>
                {portfolioData.map((item) => (
                  <div key={item.label} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ background: item.color }}
                    />
                    <span>{item.label}</span>
                    <span className={styles.legendPct}>{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 8: Vertical Bar Chart (Capacity) */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaIndustry className={styles.chartTitleIcon} />
              Annual Manufacturing Capacity
            </h3>

            <div className={styles.vertBarContainer}>
              {capacities.map((c) => (
                <div key={c.label} className={styles.vertCol}>
                  <span className={styles.vertVal}>{c.val}</span>
                  <div className={styles.vertBarTrack}>
                    <motion.div
                      className={styles.vertBarFill}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${c.pct}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className={styles.vertLabel}>{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: APPLICATION INDUSTRIES (Horizontal Bar Chart) */}
        <motion.div
          className={`${styles.glassCard} ${styles.processFlowWrapper}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.cardSpotlightGlow} />
          <h3 className={styles.chartTitle}>
            Target Industry Applications Demand (%)
          </h3>

          <div className={styles.horizBarGrid}>
            {applications.map((app) => (
              <div key={app.name} className={styles.horizBarItem}>
                <div className={styles.horizMeta}>
                  <span>{app.name}</span>
                  <span style={{ color: 'var(--gold-primary)' }}>{app.val}%</span>
                </div>
                <div className={styles.horizTrack}>
                  <motion.div
                    className={styles.horizFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${app.val}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 4: SUSTAINABILITY IMPACT (4 CIRCULAR RINGS) */}
        <div className={styles.sectionHeader} style={{ marginBottom: '40px' }}>
          <SectionTitle
            label="SUSTAINABILITY METRICS"
            title="Environmental Conservation Impact"
          />
        </div>

        <div className={styles.sustainGrid}>
          {sustainRings.map((ring, idx) => {
            const circumference = 2 * Math.PI * 52;
            const strokeDashoffset = circumference - (ring.pct / 100) * circumference;

            return (
              <motion.div
                key={ring.label}
                className={`${styles.glassCard} ${styles.ringCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardSpotlightGlow} />
                <div className={styles.ringSvgWrapper}>
                  <svg viewBox="0 0 120 120" width="100%" height="100%">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="var(--gold-primary)"
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: strokeDashoffset }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.4, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className={styles.ringCenterText}>{ring.pct}%</div>
                </div>
                <h4 className={styles.ringTitle}>{ring.label}</h4>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION 5: RECYCLING PROCESS FLOW */}
        <div className={styles.processFlowWrapper}>
          <SectionTitle
            label="INTEGRATED ECOSYSTEM"
            title="7-Stage Circular Recycling Journey"
          />

          <div className={styles.flowRow}>
            {processSteps.map((s, idx) => (
              <motion.div
                key={s.num}
                className={styles.flowStepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.08 }}
              >
                <span className={styles.flowStepNum}>STEP {s.num}</span>
                <div className={styles.flowIcon}>{s.icon}</div>
                <div className={styles.flowStepTitle}>{s.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 6: GLOBAL SOURCING WORLD MAP & PINS */}
        <div className={styles.mapWrapper}>
          <SectionTitle
            label="GLOBAL SUPPLY NETWORK"
            title="Worldwide Production & Export Presence"
          />

          <div className={styles.mapCard}>
            <div className={styles.pinsGrid}>
              {globalPins.map((p, idx) => (
                <motion.div
                  key={p.country}
                  className={styles.pinCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={styles.pulseCircle} />
                  <div>
                    <h4 className={styles.countryName}>{p.country}</h4>
                    <p className={styles.countryRole}>{p.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 7: QUALITY RADAR & SECTION 9: WHY AVANTEE */}
        <div className={styles.sectionHeader} style={{ marginBottom: '40px' }}>
          <SectionTitle
            label="WHY AVANTEE"
            title="Unrivalled Manufacturing Benchmarks"
          />
        </div>

        <div className={styles.whyInfographicGrid}>
          {whyInfographics.map((info, idx) => (
            <motion.div
              key={info.title}
              className={`${styles.glassCard} ${styles.infoCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardSpotlightGlow} />
              <div className={styles.infoBadge}>{info.badge}</div>
              <h4 className={styles.infoTitle}>{info.title}</h4>
              <p className={styles.infoDesc}>{info.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
