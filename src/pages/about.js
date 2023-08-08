import React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";
import TopRatedProducts from "../components/home/TopRatedProducts";


const About = () => {
    return (
        <Layout>
            <HeroBanner>
                <h1 className="font-family-rancho fw-500 fs-70 ">About <span className="text-primary">Us</span></h1>
                <p className="p-site">
                    A cake is the important sweet dish that gives a sweet touch to <br/> your celebration.
                </p>
            </HeroBanner>
            <TopRatedProducts/>
            <NewsLetter/>
        </Layout>
    )
}

export default About
export const Head = () => <title>BMLHCakes | About</title>
