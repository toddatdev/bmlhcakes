import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const Services = () => {
    return (
        <div className="container-fluid services-section section-margin py-5 d-flex align-items-center"
             style={{backgroundImage: `url('/services.png'`}}>
            <div className="container">
                <div className="text-center">
                    <h1 className="font-family-rancho fw-500">Values Services <span
                        className="text-primary">for Customers </span></h1>
                    <p className="p-site w-lg-75">A cake is the important sweet dish that gives a sweet touch to
                        your <br/> celebration. It has become a compulsory part.</p>
                </div>

                <div className="row services">
                    <div className="col-12 col-md-4 col-lg-3 mx-auto align-self-center mb-3 mb-lg-0 text-center">
                        <div className="service-card">
                           <span className="service-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-globe" viewBox="0 0 16 16">
                                    <path
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                                </svg>
                           </span>
                            <h5 className="font-family-rancho my-3">Global Deliveries</h5>
                            <p className="p-site">We are offering our Global Deliveries to all across the Country.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-1 d-none d-lg-block mx-auto align-self-center mb-3 mb-lg-0 text-center">
                        <StaticImage src="../../images/home/services/arrow.svg"
                                     className="img-fluid" alt="A image title" placeholder="blurred"/>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mx-auto align-self-center mb-3 mb-lg-0 text-center">
                        <div className="service-card">
                            <span className="service-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-gift" viewBox="0 0 16 16">
                                <path
                                    d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                            </svg>
                            </span>
                            <h5 className="font-family-rancho my-3">Best & Safe Packaging</h5>
                            <p className="p-site">World best and safest packaging is now live for your delicious Cakes.</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-1 d-none d-lg-block mx-auto align-self-center mb-3 mb-lg-0 text-center">
                        <StaticImage src="../../images/home/services/arrow.svg"
                                     className="img-fluid" alt="A image title" placeholder="blurred"/>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mx-auto align-self-center mb-3 mb-lg-0 text-center">
                        <div className="service-card">
                            <span className="service-card-icon">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-percent" viewBox="0 0 16 16">
                                      <path
                                          d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                    </svg>
                            </span>
                            <h5 className="font-family-rancho my-3">15% Discount</h5>
                            <p className="p-site">Adding up 15% Discount for buying more the 3 Cakes in single order.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services