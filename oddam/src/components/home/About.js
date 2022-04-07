import React from "react";
import "./_about.scss";
import decoration_image from "../../../src/assets/images/Decoration.png";
import signature_image from "../../../src/assets/images/Signature@2x.png";
function About(){

    return (
        <div className="about_container">

            <div className="about_text_container">

                <div className="about_text">
                    <h1>O nas</h1>
                    <img src={decoration_image} alt="decoration1" className="decoration2"></img>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature_image} alt="signature" className="signature"></img>
                </div>
            </div>

            <div className="about_image_container">

            </div>

        </div>


    )


}

export default About;
