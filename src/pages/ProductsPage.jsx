import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaDownload, FaArrowRight, FaTimes, FaLayerGroup, FaRecycle, FaAward } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productTypingPhrases = [
    '100% GRS Certified Recycled Fibres.',
    'High Tenacity Ring Spun Cotton Yarns.',
    'Zero Water Dope-Dyed Filament Fabrics.',
  ];

  const fullProducts = [
    {
      id: 'p1',
      category: 'fibres',
      name: 'Eco-Staple PET Micro-Fibre',
      tag: '100% Post-Consumer Plastic',
      denier: '1.2 Denier to 15 Denier',
      cut: '38mm, 44mm, 51mm staple lengths',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
      desc: 'Engineered from purified PET bottle flakes for micro-denier spinning lines, non-wovens, and thermal insulation padding.',
      applications: ['Automotive Interior Felt', 'Ring & Open-End Spinning', 'Medical Non-woven Wipes', 'Eco Geotextile Liners'],
      specs: { Tenacity: '4.8 - 5.5 g/d', Elongation: '25% - 35%', CrimpCount: '12 - 16 crimps/inch', MoistureRegain: '0.4%' }
    },
    {
      id: 'p2',
      category: 'yarns',
      name: 'Ring-Spun Recycled Cotton Yarn (Ne 10s - 40s)',
      tag: 'GRS Certified High Tenacity',
      denier: 'Count Ne 10s to Ne 40s Single/Double',
      cut: 'Ring Spun Cones with Auto-Winding',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      desc: 'Uniform, high-tenacity yarn blended from pre-consumer cotton cuttings and recycled polyester staple fibres.',
      applications: ['Luxury Denim Weaving', 'Circular Knit T-Shirts & Hoodies', 'Heavy Canvas Toweling', 'Home Furnishings'],
      specs: { CSP: '2200 - 2600', Imperfections: '< 150 / 1000m', TwistMultiplier: '3.8 - 4.2', HairinessIndex: '4.5' }
    },
    {
      id: 'p3',
      category: 'yarns',
      name: 'Waterless Dope-Dyed Filament Yarn',
      tag: 'Zero Water Pollution',
      denier: '50D / 72F to 300D / 144F',
      cut: 'Continuous Dope Dyed Filament',
      image: 'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=800&auto=format&fit=crop',
      desc: 'Pigment masterbatch injected directly during extrusion, eliminating wet dyeing baths and preserving pristine vibrancy.',
      applications: ['Activewear & Leggings', 'Outdoor Waterproof Shells', 'Luggage & Backpacks', 'Tactical Gear'],
      specs: { ColorFastness: 'Grade 4.5+', Tenacity: '5.2 g/d', Shrinkage: '< 2.5%', OilContent: '1.2%' }
    },
    {
      id: 'p4',
      category: 'fabrics',
      name: 'Avantee Shield Upcycled Canvas',
      tag: 'Heavy Duty Structural Weave',
      denier: '320 GSM Heavy Duck Canvas',
      cut: 'Width 58 / 60 Inches',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop',
      desc: 'Durable, high-abrasion fabric woven from 100% upcycled industrial textile waste with water-repellent finishing.',
      applications: ['Workwear Jackets', 'Heavy Tents & Tarpaulins', 'Commercial Upholstery', 'Eco Tote Bags'],
      specs: { TensileStrength: '1200 N Warp / 950 N Weft', TearResistance: '85 N', AbrasionCycles: '> 50,000 Rubs', WaterRepellency: 'Grade 90' }
    }
  ];

  const filtered = activeFilter === 'all'
    ? fullProducts
    : fullProducts.filter(p => p.category === activeFilter);

  return (
    <div className={styles.productsPageWrapper}>
      {/* Header Banner */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('products.badge', 'Engineered Performance')}</span>
          <h1 className={styles.headerTitle}>
            {t('products.title', 'Premium Recycled Yarns, Fibres & Fabrics')}
          </h1>
          <p className={styles.headerSubtitle}>
            Browse our GRS-certified product portfolio engineered for high-tensile industrial and fashion applications.{' '}
            <span className={styles.typingSub}>
              <TypingText phrases={productTypingPhrases} speed={60} delay={2000} />
            </span>
          </p>
        </div>
      </section>

      {/* Metric Counters Banner */}
      <section className={styles.metricBanner}>
        <GridBackground variant="grid" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.metricRow}>
            <div className={styles.metricItem}>
              <FaLayerGroup className={styles.metricIcon} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="12" suffix="+" duration={2} />
              </span>
              <span className={styles.metricText}>Product Lines</span>
            </div>
            <div className={styles.metricItem}>
              <FaRecycle className={styles.metricIconGold} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="100" suffix="%" duration={2.2} />
              </span>
              <span className={styles.metricText}>GRS Certified</span>
            </div>
            <div className={styles.metricItem}>
              <FaAward className={styles.metricIcon} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="50" suffix="K+" duration={2.5} />
              </span>
              <span className={styles.metricText}>MT Annual Output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className={`section-padding ${styles.catalogSection}`}>
        <GridBackground variant="dots" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.filterBar}>
            <div className={styles.filterLabel}>
              <FaFilter />
              <span>Filter Category:</span>
            </div>
            <div className={styles.tabGroup}>
              {['all', 'fibres', 'yarns', 'fabrics'].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${activeFilter === cat ? styles.activeFilterTab : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.productsGrid}>
            {filtered.map((prod) => (
              <motion.div
                key={prod.id}
                className={styles.productCard}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardImgBox}>
                  <img src={prod.image} alt={prod.name} className={styles.cardImg} />
                  <span className={styles.tagBadge}>{prod.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.catBadge}>{prod.category.toUpperCase()}</span>
                  <h3 className={styles.cardName}>{prod.name}</h3>
                  <p className={styles.cardDesc}>{prod.desc}</p>

                  <div className={styles.appRow}>
                    <strong>Key Uses:</strong>
                    <div className={styles.tagWrap}>
                      {prod.applications.slice(0, 3).map((app, i) => (
                        <span key={i} className={styles.appChip}>{app}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <button className="btn-primary" onClick={() => setSelectedProduct(prod)}>
                      <span>Full Specifications</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spec Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className={styles.modalOverlay}>
            <motion.div
              className={styles.modalBackdrop}
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={styles.specModal}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>

              <div className={styles.modalGrid}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.modalImg} />

                <div>
                  <span className={styles.tagBadge}>{selectedProduct.tag}</span>
                  <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                  <p className={styles.modalDesc}>{selectedProduct.desc}</p>

                  <h4 className={styles.specSectionTitle}>Technical Data Sheet</h4>
                  <div className={styles.specGrid}>
                    {Object.entries(selectedProduct.specs).map(([k, v]) => (
                      <div key={k} className={styles.specBox}>
                        <span className={styles.specKey}>{k}:</span>
                        <span className={styles.specVal}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actionGroup}>
                    <button className="btn-gold" onClick={() => alert('Downloading official TDS brochure...')}>
                      <FaDownload />
                      <span>Download Technical Spec PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
