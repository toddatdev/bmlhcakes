import React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";


const Community = () => {
    return (
        <Layout>
            <HeroBanner>
                <h1 className="font-family-rancho fw-500 fs-70 text-primary">Community</h1>
                <p className="p-site">
                    A cake is the important sweet dish that gives a sweet touch to  <br/> your celebration.
                </p>
            </HeroBanner>
            <NewsLetter/>
        </Layout>
    )
}

export default Community
export const Head = () => <title>BMLHCakes | Community</title>
