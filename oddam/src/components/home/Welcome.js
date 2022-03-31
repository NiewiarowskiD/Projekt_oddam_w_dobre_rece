import React from "react";
import "./_welcome.scss";

function Welcome(){

    return (
        <div className="welcome_container">

            <h1>Zacznij Pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>

                <div className="welcome_buttons_container">

                    <div className="oddaj_rzecz_container">
                        <p>ODDAJ RZECZY</p>

                    </div>

                    <div className="zorganizuj_zbiorke_container">
                        <p>ZORGANIZUJ ZBIÓRKĘ</p>

                    </div>


                </div>

        </div>


    )


}

export default Welcome;
