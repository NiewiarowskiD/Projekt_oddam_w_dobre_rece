import React from "react";
import "./_welcome.scss";
import decoration_image from "../../../src/assets/images/Decoration.png";

function Welcome(){

    return (
        <div className="welcome_container">

            <h1>Zacznij Pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src={decoration_image} alt="decoration1" className="decoration"></img>

                <div className="welcome_buttons_container">

                    <div className="oddaj_rzecz_container">
                        <p>ODDAJ<br />RZECZY</p>

                    </div>

                    <div className="zorganizuj_zbiorke_container">
                        <p>ZORGANIZUJ<br />ZBIÓRKĘ</p>

                    </div>


                </div>

        </div>


    )


}

export default Welcome;
