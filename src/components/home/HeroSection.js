import * as React from "react";
import {graphql, useStaticQuery} from 'gatsby'
import {getImage, GatsbyImage, StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";

const HeroSection = () => {
    return (
        <div className="container-fluid px-lg-0" style={{backgroundImage: `url('/hero_img.png'`}}>

            <div className="text-center pt-70">
                <h1 className="font-family-rancho fw-500 fs-70 ">Exquisite Taste <br/>
                    for true <span className="text-primary">Connoissuerus</span></h1>
                <p className="p-site">
                    A cake is the important sweet dish that gives a sweet touch to <br/> your celebration. It has become
                    a compulsory part of <br/> social and religious events.
                </p>
                <Link to="/products" className="btn btn-primary btn-site">Explore our Popular</Link>
            </div>

            <div className="d-flex justify-content-between align-items-end cakes-section">
                <div className="hero-side-images">
                    <StaticImage src="../../images/home/hero_img1.png"
                                 className="d-none d-md-block" alt="A image title" placeholder="blurred"/>
                </div>
                <div className="">
                    <StaticImage src="../../images/home/hero_img2.png"
                                 className="hero-side-images" alt="A image title" placeholder="blurred"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection