import React from "react";
import Header from "../../components/Header/Header";
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import VideoCarousel from '../../components/VideoCarousel/VideoCarousel';
import Featurelist from '../../components/Featurelist/Featurelist'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import Footer from "../../components/Footer/Footer";
import featureListCardData from '../../data/homePageWatchList'; //json data for Feature List
import QuizBanner from '../../components/QuizBanner/QuizBanner'

const HomePage = () => {
  console.log(featureListCardData.featureList)
  return (
    <div>
      <Header />
      <QuizBanner />
      <VideoCarousel />      
      <SectionHeader headerLight={"Explore"} headerbold={"Bestsellers"} />
      <Featurelist  cardData={featureListCardData.featureList}/>
      <ProductCategories />
      <Footer />
    </div>
  );
};

export default HomePage;
