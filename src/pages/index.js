import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/home/HeroSection";
import Collection from "../components/home/Collection";
import LatestItems from "../components/home/LatestItems";
import TopRatedProducts from "../components/home/TopRatedProducts";
import GreatOldFamilyRecipes from "../components/home/GreatOldFamilyRecipes";
import OurClients from "../components/home/OurClients";
import Services from "../components/home/Services";
import OurStory from "../components/home/OurStory";
import NewsLetter from "../components/NewsLetter";

const IndexPage = () => {
    return (
        <Layout>
            <HeroSection/>
            <Collection/>
            <LatestItems/>
            <TopRatedProducts/>
            <GreatOldFamilyRecipes/>
            <OurClients/>
            <Services/>
            <OurStory/>
            <NewsLetter/>
        </Layout>
    )
}

export default IndexPage
export const Head = () => <title>BMLHCakes | Home</title>
