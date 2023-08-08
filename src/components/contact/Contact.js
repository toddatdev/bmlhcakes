import * as React from "react";
import {graphql, useStaticQuery} from 'gatsby'
import {getImage, GatsbyImage, StaticImage} from "gatsby-plugin-image"


const Contact = () => {
    return (
        <div className="container-fluid" style={{backgroundImage: `url('/hero_img.png'`}}>
            <div className="container py-5">
                <div className="row py-lg-4">
                    <div className="col-12 col-lg-6">
                        <h1 className="font-family-rancho fw-500 text-primary">Contact Us</h1>

                        <form action="https://submit-form.com/ba0PmLRH">
                            <div className="row">

                                {/*<input*/}
                                {/*    type="hidden"*/}
                                {/*    name="_redirect"*/}
                                {/*    value="https://your-website.com/thanks"*/}
                                {/*/>*/}


                                <div className="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor="" className="form-label fw-500 fs-13">First Name</label>
                                    <input type="text" name="first_name" className="form-control" required placeholder="Enter your First Name"/>
                                </div>
                                <div className="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor="" className="form-label fw-500 fs-13">Last Name</label>
                                    <input type="text" name="last_name" className="form-control" required placeholder="Enter your Last Name"/>
                                </div>
                                <div className="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor="" className="form-label fw-500 fs-13">Email Address</label>
                                    <input type="email" name="email" className="form-control" required placeholder="Enter your Email Address"/>
                                </div>
                                <div className="form-group col-12 col-md-6 mb-3">
                                    <label htmlFor=""  className="form-label fw-500 fs-13">Type</label>
                                    <select name="type" id="" className="form-control" required>
                                        <option value="">Enter Type</option>
                                        <option value="typ1">Type 1</option>
                                        <option value="typ2">Type 1</option>
                                        <option value="typ3">Type 1</option>
                                    </select>
                                </div>

                                <div className="form-group col-12 mb-3">
                                    <label htmlFor="" className="form-label fw-500 fs-13">Comment</label>
                                    <textarea name="message" className="form-control" rows="7" placeholder="Comment">

                                </textarea>
                                </div>
                                <div className="">
                                    <button className="btn btn-primary px-5 py-2 fw-400 mb-3" type="submit">Send</button>
                                    {/*<p className="fs-14 text-gray-700">*/}
                                    {/*    If you already have an account,*/}
                                    {/*    <a href="#!"*/}
                                    {/*       data-bs-toggle="modal" data-bs-target="#userLoginAccountModal"*/}
                                    {/*       className="text-primary fw-600 text-decoration-none ms-1">Log In Here*/}
                                    {/*    </a>*/}
                                    {/*</p>*/}

                                </div>

                            </div>
                        </form>

                    </div>
                    <div className="col-12 col-lg-6 text-lg-end d-none d-lg-block">
                        <StaticImage src="../../images/home/hero_img2.png"
                                     className="hero-side-images" alt="A image title" placeholder="blurred"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact