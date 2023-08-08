import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const GreatOldFamilyRecipes = () => {
    return (
        <div className="container  section-margin">
            <div className="great-old-family rounded shadow-sm" style={{ backgroundImage: `url('/great_old_family.png'` }}>
                <div className="row section-padding">
                    <div className="col-12 col-lg-6 offset-lg-6 text-center">
                        <h1 className="font-family-rancho fw-500">Great Old Family<span
                            className="text-primary">Recipes</span></h1>
                        <p className="fw-600 text-primary-light ls text-uppercase">Open 6:30am to 7:30pm Daily</p>
                        <p className="p-site">You can personalize your cake with everything from cake flavor, frosting colors and top
                            trending cake decorations in a single click and get your order all way to our doorstep.</p>
                        <p className="text-info fs-14">#cake #cakedecorating #cakes #birthdaycake #chocolate #food #dessert #cakesofinstagram #birthday #cakedesign #instafood #baking</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="" className="btn btn-primary btn-site">
                                Order Now
                            </a>
                            <div className="ms-3 text-start">
                                <p className="mb-0 fs-14">Or Call us at:</p>
                                <a href="#!" className="text-primary text-decoration-none">(+1) 408-248-2027</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreatOldFamilyRecipes