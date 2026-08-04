import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTimes, FaDownload } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import styles from './ProductsShowcaseSection.module.css';

export const ProductsShowcaseSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsData = [
    {
      id: 'f1',
      category: 'fibres',
      title: 'Eco-Staple PET Micro-Fibre',
      badge: '100% Recycled',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
      denier: '1.2D to 15D',
      cutLength: '32mm - 64mm',
      blend: '100% Post-Consumer PET Chips',
      applications: 'Non-woven, Spinning, Automotive Linings, Geotextiles',
      certifications: 'GRS v4.0, OEKO-TEX Standard 100 Class I',
    },
    {
      id: 'y1',
      category: 'yarns',
      title: 'Ring-Spun Recycled Cotton Yarn',
      badge: 'High Tenacity',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
      denier: 'Ne 10s to Ne 40s Single/Pied',
      cutLength: 'Uniform Ring Spun Twist',
      blend: '60% Recycled Cotton + 40% Recycled PET',
      applications: 'Knitwear, Luxury Denim, Home Furnishings',
      certifications: 'GRS Certified, Global Organic Textile Standard',
    },
    {
      id: 'y2',
      category: 'yarns',
      title: 'Technical Eco Filament Yarn',
      badge: 'Waterless Dyed',
      image: 'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=800&auto=format&fit=crop',
      denier: '50D / 72F to 300D / 144F',
      cutLength: 'Continuous Dope Dyed Filament',
      blend: '100% Recycled Ocean PET Polymer',
      applications: 'Activewear, Sportswear, Outdoor Outerwear',
      certifications: 'HIGG Index Verified, ISO 14001',
    },
    {
      id: 'fb1',
      category: 'fabrics',
      title: 'Avantee Shield Eco-Canvas',
      badge: 'Zero-Water Dye',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop',
      denier: '280 GSM to 450 GSM',
      cutLength: '58/60 Inch Roll Width',
      blend: '100% Upcycled Industrial Textile Blend',
      applications: 'Heavy-Duty Bags, Tactical Outerwear, Upholstery',
      certifications: 'GRS Traceable, OEKO-TEX 100',
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section className={`section-padding ${styles.productsWrapper}`}>
      <GridBackground variant="dots" dark={false} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle
          label={t('products.badge', 'Engineered Performance')}
          title={t('products.title', 'Premium Recycled Yarns, Fibres & Fabrics')}
          subtitle={t('products.subtitle')}
        />

        {/* Filter Tabs */}
        <div className={styles.filterTabRow} style={{ marginBottom: '40px' }}>
            {['all', 'fibres', 'yarns', 'fabrics'].map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeCategory === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(tab)}
              >
                {tab === 'all' && t('products.tabAll', 'All Products')}
                {tab === 'fibres' && t('products.tabFibres', 'Recycled Fibres')}
                {tab === 'yarns' && t('products.tabYarns', 'Recycled Yarns')}
                {tab === 'fabrics' && t('products.tabFabrics', 'Eco Fabrics')}
              </button>
            ))}
          </div>

        {/* Product Cards Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              className={styles.productCard}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              data-cursor="hover"
              data-cursor-text="Specs"
              onClick={() => setSelectedProduct(prod)}
            >
              <div className={styles.imageContainer}>
                <img src={prod.image} alt={prod.title} className={styles.cardImg} />
                <span className={styles.tagBadge}>{prod.badge}</span>
                <div className={styles.overlayGradient} />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.catLabel}>{prod.category.toUpperCase()}</span>
                <h3 className={styles.cardTitle}>{prod.title}</h3>

                <div className={styles.quickSpecs}>
                  <div>
                    <span className={styles.specKey}>Denier/Count:</span>
                    <span className={styles.specVal}>{prod.denier}</span>
                  </div>
                  <div>
                    <span className={styles.specKey}>Blend:</span>
                    <span className={styles.specVal}>{prod.blend}</span>
                  </div>
                </div>

                <button className={styles.specBtn}>
                  <span>{t('products.viewDetails', 'Technical Specs')}</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Spec Modal */}
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
              <button className={styles.modalClose} onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>

              <div className={styles.modalGrid}>
                <img src={selectedProduct.image} alt={selectedProduct.title} className={styles.modalImg} />
                <div className={styles.modalContent}>
                  <span className={styles.tagBadge}>{selectedProduct.badge}</span>
                  <h3 className={styles.modalTitle}>{selectedProduct.title}</h3>

                  <div className={styles.specTable}>
                    <div className={styles.tableRow}>
                      <strong>Denier / Count Range:</strong>
                      <span>{selectedProduct.denier}</span>
                    </div>
                    <div className={styles.tableRow}>
                      <strong>Composition & Blend:</strong>
                      <span>{selectedProduct.blend}</span>
                    </div>
                    <div className={styles.tableRow}>
                      <strong>Cut Length / Form:</strong>
                      <span>{selectedProduct.cutLength}</span>
                    </div>
                    <div className={styles.tableRow}>
                      <strong>Target Applications:</strong>
                      <span>{selectedProduct.applications}</span>
                    </div>
                    <div className={styles.tableRow}>
                      <strong>Certifications:</strong>
                      <span>{selectedProduct.certifications}</span>
                    </div>
                  </div>

                  <div className={styles.modalActionRow}>
                    <Link to="/contact" className="btn-primary" onClick={() => setSelectedProduct(null)}>
                      <span>Request Bulk Sample</span>
                      <FaArrowRight />
                    </Link>
                    <button className="btn-gold" onClick={() => alert('Brochure PDF downloading...')}>
                      <FaDownload />
                      <span>{t('products.downloadBrochure', 'Download Brochure')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
