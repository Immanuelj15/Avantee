import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRecycle,
  FaIndustry,
  FaLeaf,
  FaTshirt,
  FaStore,
  FaBoxOpen,
  FaUserCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { GridBackground } from '../Common/GridBackground';
import styles from './CircularInfinitySection.module.css';

export const CircularInfinitySection = () => {
  const scrollAnim = { once: false, amount: 0.2 };

  // 8 Nodes along the Infinity Loop matching the user's reference diagram
  const nodes = [
    {
      id: 'n1',
      title: 'Pre-Consumer Waste',
      desc: 'High-grade garment cutting scraps ethically recovered before reaching consumers.',
      x: 180,
      y: 80,
      icon: <FaRecycle />,
    },
    {
      id: 'n2',
      title: 'Recycler',
      desc: 'Mechanical opening and fibre purification without harsh chemical solvents.',
      x: 180,
      y: 280,
      icon: <FaRecycle />,
    },
    {
      id: 'n3',
      title: 'Recycled Material',
      desc: 'Micro-denier staple fibres prepared for high-tenacity spinning lines.',
      x: 90,
      y: 220,
      icon: <FaLeaf />,
    },
    {
      id: 'n4',
      title: 'Manufacturer',
      desc: 'Automated Swiss Rieter spinning frames producing ring-spun eco-yarns.',
      x: 90,
      y: 140,
      icon: <FaIndustry />,
    },
    {
      id: 'n5',
      title: 'Garments',
      desc: 'Upcycled woven canvases and knitted fabrics ready for fashion apparel.',
      x: 270,
      y: 140,
      icon: <FaTshirt />,
    },
    {
      id: 'n6',
      title: 'Retailing Brand',
      desc: 'Supplying 500+ global fashion brands across 45+ international markets.',
      x: 360,
      y: 180,
      icon: <FaStore />,
    },
    {
      id: 'n7',
      title: 'Post-Consumer Waste',
      desc: 'End-of-life textiles collected and redirected back into recycling loops.',
      x: 480,
      y: 80,
      icon: <FaBoxOpen />,
    },
    {
      id: 'n8',
      title: 'End Customer',
      desc: 'Eco-conscious global consumers embracing zero-landfill circular products.',
      x: 540,
      y: 200,
      icon: <FaUserCheck />,
    },
  ];

  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className={styles.infinitySectionWrapper}>
      <GridBackground variant="dots" dark={true} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className={styles.infinityGrid}>
          {/* Left Content Column */}
          <motion.div
            className={styles.leftContentCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <span>CIRCULAR ECONOMY ECOSYSTEM</span>
            </div>

            <h2 className={styles.title}>
              Closed-Loop Textile Manufacturing
            </h2>

            <p className={styles.desc}>
              Avantee Industries operates a complete zero-waste manufacturing loop. By converting pre-consumer textile waste back into high-grade staple fibres, yarns, and fabrics, we eliminate virgin resource dependency and protect global ecosystems.
            </p>

            <div className={styles.featureChips}>
              <span className={styles.chip}>✦ 100% Pre-Consumer Waste</span>
              <span className={styles.chip}>✦ Zero-Landfill Process</span>
              <span className={styles.chip}>✦ GRS & OEKO-TEX Certified</span>
              <span className={styles.chip}>✦ Zero Chemical Solvents</span>
            </div>

            <div>
              <Link to="/sustainability" className="btn-primary">
                <span>Explore Circular Process</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Right Interactive Infinity Loop SVG */}
          <motion.div
            className={styles.infinitySvgContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollAnim}
            transition={{ duration: 0.8 }}
          >
            <svg
              className={styles.infinitySvg}
              viewBox="0 0 600 360"
              width="100%"
              height="100%"
            >
              <defs>
                <linearGradient id="goldEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D9B65D" />
                  <stop offset="50%" stopColor="#1B7F5B" />
                  <stop offset="100%" stopColor="#DDF5E5" />
                </linearGradient>
              </defs>

              {/* Background Figure-8 Infinity Track */}
              <path
                className={styles.loopTrack}
                d="M 180 180 C 60 60 60 300 180 180 C 300 60 420 60 540 180 C 420 300 300 300 180 180 Z"
              />

              {/* Animated Glowing Flow Track */}
              <path
                className={styles.loopActivePath}
                d="M 180 180 C 60 60 60 300 180 180 C 300 60 420 60 540 180 C 420 300 300 300 180 180 Z"
              />

              {/* Interactive Nodes along Infinity Loop */}
              {nodes.map((node) => (
                <g
                  key={node.id}
                  className={styles.nodeGroup}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="24"
                    className={styles.nodeCircle}
                  />
                  <text
                    x={node.x}
                    y={node.y + 40}
                    className={styles.nodeLabel}
                  >
                    {node.title.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>

            {/* Active Node Info Card Modal */}
            <div className={styles.activeTooltip}>
              <h4 className={styles.tooltipTitle}>{activeNode.title}</h4>
              <p className={styles.tooltipDesc}>{activeNode.desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
