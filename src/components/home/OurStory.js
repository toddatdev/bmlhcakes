import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const OurStory = () => {
    return (
        <div className="container-fluid bg-light-gray py-5 mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0 pt-lg-4 pe-lg-5">
                        <h1 className="font-family-rancho fw-500">Our <span
                            className="text-primary">Story</span></h1>
                        
                        <p className="p-site">
                            Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration;
                            but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term.

                        </p>
                    </div>
                    <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                        <div className="row mb-3">
                            <div className="col-12 col-lg-4 mb-3">
                                <StaticImage src="../../images/home/story/1.png"
                                             className="img-fluid" alt="A image title" placeholder="blurred"/>
                            </div>
                            <div className="col-12 col-lg-8 mb-3">
                                <StaticImage src="../../images/home/story/2.png"
                                             className="img-fluid" alt="A image title" placeholder="blurred"/>
                            </div>

                            <div className="col-12 col-lg-8 mb-3">
                                <StaticImage src="../../images/home/story/3.png"
                                             className="img-fluid" alt="A image title" placeholder="blurred"/>
                            </div>
                            <div className="col-12 col-lg-4 mb-3">
                                <StaticImage src="../../images/home/story/4.png"
                                             className="img-fluid" alt="A image title" placeholder="blurred"/>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory