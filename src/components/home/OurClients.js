import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const OurClients = () => {
    return (
        <div className="container-fluid section-padding section-margin"
             style={{backgroundImage: `url('/testimonials.png'`}}>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="font-family-rancho fw-500">What Our <span
                        className="text-primary">Clients Says</span></h1>
                    <p className="p-site w-lg-75">Let’s see some of our Clients that what are they experiencing and
                        get <br/> their pleasant and hygenic taste.</p>
                </div>
                <div id="carouselTestimonial" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner position-relative">

                        <div className="btn-group gap-4 position-absolute bottom-arrow">
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselTestimonial" data-bs-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="66"
                                     fill="currentColor" className="bi bi-arrow-left-short"
                                     viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                </svg>
                                <span className="visually-hidden">Previous</span>

                            </button>

                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselTestimonial" data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="66"
                                     fill="currentColor" className="bi bi-arrow-right-short"
                                     viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg>
                                <span className="visually-hidden">Next</span>


                            </button>

                        </div>

                        <div className="carousel-item active">
                            <div className="row bg-client-testimonial py-2 py-lg-5"
                                 style={{backgroundImage: `url('/bg-client-testimonial.png'`}}>
                                <div className="col-lg-4">
                                    <StaticImage src="../../images/home/testimonials/t1.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                </div>
                                <div className="col-lg-8 align-self-center px-5">
                                    <StaticImage src="../../images/home/testimonials/testimonail-sign.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                    <p className="font-family-rancho fs-24 my-4">
                                        I ordered the southern red velvet and it was DELICIOUS!!! It was as good as
                                        grandma’s.
                                        I added lettering and confetti sprinkles and the presentation and packaging were
                                        on point.
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>Martina Alex</h6>
                                            <p className="p-site">Digital Marketing Specialist</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="row bg-client-testimonial py-2 py-lg-5"
                                 style={{backgroundImage: `url('/bg-client-testimonial.png'`}}>
                                <div className="col-lg-4">
                                    <StaticImage src="../../images/home/testimonials/t1.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                </div>
                                <div className="col-lg-8 align-self-center px-5">
                                    <StaticImage src="../../images/home/testimonials/testimonail-sign.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                    <p className="font-family-rancho fs-24 my-4">
                                        I ordered the southern red velvet and it was DELICIOUS!!! It was as good as
                                        grandma’s.
                                        I added lettering and confetti sprinkles and the presentation and packaging were
                                        on point.
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>Martina Alex</h6>
                                            <p className="p-site">Digital Marketing Specialist</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row bg-client-testimonial py-2 py-lg-5"
                                 style={{backgroundImage: `url('/bg-client-testimonial.png'`}}>
                                <div className="col-lg-4">
                                    <StaticImage src="../../images/home/testimonials/t1.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                </div>
                                <div className="col-lg-8 align-self-center px-5">
                                    <StaticImage src="../../images/home/testimonials/testimonail-sign.png"
                                                 className="rounded-top img-fluid" alt="A image title"
                                                 placeholder="blurred"/>
                                    <p className="font-family-rancho fs-24 my-4">
                                        I ordered the southern red velvet and it was DELICIOUS!!! It was as good as
                                        grandma’s.
                                        I added lettering and confetti sprinkles and the presentation and packaging were
                                        on point.
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>Martina Alex</h6>
                                            <p className="p-site">Digital Marketing Specialist</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients