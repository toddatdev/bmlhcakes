import * as React from "react";

const Footer = () => {
    return (
        <div className="bg-primary py-3">
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center mb-lg-0 text-center text-md-start">
                        <p className="mb-0 fs-14 fw-500">© 2022 BMLH. All Copyright Reserved</p>
                    </div>
                    <div className="col-12 col-md-6 align-self-center text-center text-md-end ">
                        <div className="btn-group">
                            <a href="" className="btn text-white fs-14 py-0  border-end">Privacy Policy</a>
                            <a href="" className="btn text-white fs-14 py-0 ">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer