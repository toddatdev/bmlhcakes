import * as React from "react";
import {graphql, useStaticQuery} from 'gatsby'
import {getImage, GatsbyImage, StaticImage} from "gatsby-plugin-image"



const HeroBanner = ( {children}) => {
    return (
        <div className="container-fluid px-lg-0" style={{backgroundImage: `url('/hero_img.png'`}}>

            <div className="text-center pt-70">
                {children}
            </div>

            <div className="d-flex justify-content-center justify-content-lg-between align-items-end cakes-section">
                <div className="hero-side-images d-none d-md-block">
                    <StaticImage src="../../images/home/hero_img1.png"
                                 className="" alt="A image title" placeholder="blurred"/>
                </div>
                <div className="">
                    <StaticImage src="../../images/home/hero_img2.png"
                                 className="hero-side-images" alt="A image title" placeholder="blurred"/>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner