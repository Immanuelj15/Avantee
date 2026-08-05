import React from 'react';
import { HeroSection } from '../components/Home/HeroSection';
import { MarqueeSection } from '../components/Home/MarqueeSection';
import { CircularInfinitySection } from '../components/Home/CircularInfinitySection';
import { AboutPreviewSection } from '../components/Home/AboutPreviewSection';
import { RecyclingStorytellingSection } from '../components/Home/RecyclingStorytellingSection';
import { ProductsShowcaseSection } from '../components/Home/ProductsShowcaseSection';
import { DataVisualizationSection } from '../components/Home/DataVisualizationSection';
import { InteractiveEarthSection } from '../components/Home/InteractiveEarthSection';
import { GlobalNetworkMap } from '../components/Home/GlobalNetworkMap';
import { TestimonialsSection } from '../components/Home/TestimonialsSection';
import { PartnersLogos } from '../components/Home/PartnersLogos';
import { CTASection } from '../components/Home/CTASection';

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <HeroSection />
      <MarqueeSection />
      <CircularInfinitySection />
      <AboutPreviewSection />
      <RecyclingStorytellingSection />
      <ProductsShowcaseSection />
      <DataVisualizationSection />
      <InteractiveEarthSection />
      <GlobalNetworkMap />
      <TestimonialsSection />
      <PartnersLogos />
      <CTASection />
    </div>
  );
};
