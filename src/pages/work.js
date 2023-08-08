import React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";
import Services from "../components/home/Services";
import OurStory from "../components/home/OurStory";


const Work = () => {
    return (
        <Layout>
            <HeroBanner>
                <h1 className="font-family-rancho fw-500 fs-70 ">Old Grandmother  <span className="text-primary">Recipes</span></h1>
                <p className="p-site">
                    A cake is the important sweet dish that gives a sweet touch to  <br/> your celebration.
                </p>
            </HeroBanner>
            <Services/>
            <OurStory/>
            <NewsLetter/>
        </Layout>
    )
}

export default Work
export const Head = () => <title>BMLHCakes | Work</title>
