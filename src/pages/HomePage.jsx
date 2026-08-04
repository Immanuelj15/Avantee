import React from 'react';
import { HeroSection } from '../components/Home/HeroSection';
import { MarqueeSection } from '../components/Home/MarqueeSection';
import { AboutPreviewSection } from '../components/Home/AboutPreviewSection';
import { ProcessTimelineSection } from '../components/Home/ProcessTimelineSection';
import { ProductsShowcaseSection } from '../components/Home/ProductsShowcaseSection';
import { InteractiveEarthSection } from '../components/Home/InteractiveEarthSection';
import { GlobalNetworkMap } from '../components/Home/GlobalNetworkMap';
import { TestimonialsSection } from '../components/Home/TestimonialsSection';
import { PartnersLogos } from '../components/Home/PartnersLogos';

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <HeroSection />
      <MarqueeSection />
      <AboutPreviewSection />
      <ProcessTimelineSection />
      <ProductsShowcaseSection />
      <InteractiveEarthSection />
      <GlobalNetworkMap />
      <TestimonialsSection />
      <PartnersLogos />
    </div>
  );
};
