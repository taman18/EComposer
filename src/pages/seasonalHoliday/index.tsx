import React from "react";
import VideoComponent from "./components/featureVideo/FeatureVideo";
import FeatureDetails from "./components/featureHighlights/FeatureDetails";
import LandingImageSection from "./components/landingImageSection/LandingImageSection";
import PersonalizedOptions from "./components/PersonalizedOptions";
import CustomerReviews from "./components/customerReviews";
import NewsletterSignup from "./components/newsletterSignup/NewsletterSignup";
import CustomBraceletDesigns from "./components/customBraceletDesigns";
import { CUSTOMER_REVIEW, PERSONALIZED_REVIEW } from "../../utils/mockData";
import DadGiftRecommendations from "./components/dadGiftRecommendations/DadGiftRecommendations";
const Main: React.FC = () => {

  return (
    <>
      <LandingImageSection
        backgroundImage="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-MsqN2b0g87bn-hero-fdd.png?v=1715908876"
        heroLayerImage1="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZhdKNaVpNNbn-hero-fd-layer.png?v=1715833881"
        heroLayerImage2="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-23hgB1ne1Xbn-hero-fd-layer-1.png?v=1715844175"
        countdownMessage="Hurry up, Deals end soon!"
        targetDate="2024-10-10T00:00:00"
        headingText="PERFECT GIFT FOR FATHER'S DAY"
        subheadingText="Celebrate Dad with Personalized Daddy Bracelets"
        buttonText="SHOP NOW"
      />
      <VideoComponent videoSrc="https://cdn.shopify.com/videos/c/o/v/f62cba1389b544d9ad16574e6c2c8cf3.mp4" />

      <CustomBraceletDesigns />

      <FeatureDetails />
      <PersonalizedOptions />

      <DadGiftRecommendations />

      <CustomerReviews
        personalizedReview={PERSONALIZED_REVIEW}
        customerReviews={CUSTOMER_REVIEW}
      />
      <NewsletterSignup
        backgroundImage="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-d6GQx2NhVVbg-news-ft.png?v=1716170823"
        title="Subscribe to our newsletter for special discounts"
        placeholder="Enter Your Email..."
        buttonText="Subscribe"
        socialLinks={{
          facebook: "https://facebook.com/yourpage",
          xbox: "https://xbox.com/yourpage",
          instagram: "https://instagram.com/yourpage",
          email: "mailto:youremail@example.com",
        }}
        trustImage="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-xYANQFRXcwtrust-ft-w.png?v=1701829329"
      />
    </>
  );
};

export default Main;
