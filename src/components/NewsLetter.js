import * as React from "react";

const NewsLetter = () => {
    return (
        <div className="container-fluid newsletter-section py-5 d-flex align-items-center" style={{ backgroundImage: `url('/newsletter.png'` }}>
            <div className="container">
                <div className="row text-center">
                  <div className="offset-lg-3 col-lg-6 mx-auto">
                      <h1 className="font-family-rancho fw-500">Join our <span
                          className="text-primary">Newsletter </span></h1>
                      <p className="p-site w-lg-75">
                          Get the freshest our updates and offers right to your inbox! Plus, enjoy 10% <br/> off on your birthday when you share the date with us!
                      </p>


                      <div className="input-group mb-3 border p-2 rounded-2 bg-white">
                          <input type="text" className="form-control border-0 outline-none" placeholder="Enter your Email Address"
                                 aria-label="Recipient's username" aria-describedby="button-addon2"/>
                          <button className="btn btn-primary rounded-2 px-4" type="button" id="button-addon2">Subscribe
                          </button>
                      </div>
                  </div>

                </div>

            </div>
        </div>
    )
}

export default NewsLetter