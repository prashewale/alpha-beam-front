import BannerSection from './banner-section';
import LogoCarousel from './logo-carousel';
import Header from '../common/header';
import HeroSection from './hero';
import SpotLightSection from './spotlight-section';
import CategoryBannerSection from './category-banner-section';
import ProductBestBanner from '../common/product-best-banner';
import VideoBannerSection from '../common/video-section';
import TestimonialsAboutUs from './testimonials-about-us';
import TestimonialSection from './testimonial-section';
import CounterClient from './counter-client';
import FeedbackSection from '../common/feedback-section';
import Footer from '../common/footer';
import { useState } from 'react';
import ModalPopup from '../common/modal-popup';
import CouponModal from './coupon-modal';
import EnquirySection from './enquiry-section';
import { useGetProducts } from '@/lib/react-query/queries';
import { Product } from '@/types';

/**
 * The main entry point for the home page.
 *
 * This component renders all the major sections of the home page, including the
 * hero section, banner section, spotlight section, logo carousel, category
 * banner section, product best banner section, video banner section,
 * testimonials section, testimonial section, counter client section, and the
 * feedback section.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */

const Home = () => {
  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || [];

  const similarProducts = productsList.slice(0, 7);

  return (
    <>
      <CouponModal />
      <Header />
      {/* <Features /> */}
      <HeroSection />
      <BannerSection />
      <SpotLightSection />
      <LogoCarousel />
      <EnquirySection />
      {/* <CategoryBannerSection /> */}
      <ProductBestBanner
        title="Best seller of all times"
        products={similarProducts}
      />
      <VideoBannerSection />
      <TestimonialsAboutUs />
      <TestimonialSection />
      <CounterClient />
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Home;
