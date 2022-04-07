import React from "react";
import "./_three_colums.scss";
import home_image from "../../assets/images/Home-Hero-Image.png";
import Login from "./Login";
import Menu from "./Menu";
import Welcome from "./Welcome";

function Three_columns(){

    return (
        <div className="three_columns_container">
            <div className="column">
                <h1 className="number_column">10</h1>
                <h2 className="h2_column">ODDANYCH WORKÓW</h2>
                <p className="p_column">Lorem ipsum dolor sit amet lakicone embera sone la, conscere adispic vel enim a leita viviera elementura. Aliguarta ertata Volupatti</p>
            </div>

            <div className="column">
                <h1 className="number_column">5</h1>
                <h2 className="h2_column">WSKAZANYCH ORGANIZACJI </h2>
                <p className="p_column">Lorem ipsum dolor sit amet lakicone embera sone la, conscere adispic vel enim a leita viviera elementura. Aliguarta ertata Volupatti</p>

            </div>
            <div className="column">
                <h1 className="number_column">7</h1>
                <h2 className="h2_column">ZORGANIZOWANYCH ZBIÓREK</h2>
                <p className="p_column">Lorem ipsum dolor sit amet lakicone embera sone la, conscere adispic vel enim a leita viviera elementura. Aliguarta ertata Volupatti</p>

            </div>


        </div>
    )


}

export default Three_columns;
