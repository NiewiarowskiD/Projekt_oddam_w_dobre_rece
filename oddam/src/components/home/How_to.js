import React from "react";
import "./_how_to.scss";
import decoration_image from "../../../src/assets/images/Decoration.png";
import icon1 from "../../../src/assets/images/icons/1@2x.png";
import icon2 from "../../../src/assets/images/icons/2@2x.png";
import icon3 from "../../../src/assets/images/icons/3@2x.png";
import icon4 from "../../../src/assets/images/icons/4@2x.png";

function How_to(){

    return (
        <div className="how_to_container">

            <div className="how_to_1">
                <h1 className="header_how_to">Wystarczą 4 proste kroki</h1>
                <img src={decoration_image} alt="decoration1" className="decoration"></img>

            </div>

            <div className="how_to_2">

                <div className="ht_describe_container">
                    <img src={icon3} alt="icon_tshirt" className="icon"></img>
                    <h1 className="h1_how_to">Wybierz rzeczy</h1>
                    <div className="style_border"></div>
                    <p className="p_how_to">ubrania,zabawki,sprzęt i inne</p>

                </div>

                <div className="ht_describe_container">
                    <img src={icon4} alt="icon_bag" className="icon"></img>
                    <h1 className="h1_how_to">Spakuj je</h1>
                    <div className="style_border"></div>
                    <p className="p_how_to">skorzystaj z worków na śmieci</p>


                </div>

                <div className="ht_describe_container">
                    <img src={icon2} alt="icon_search" className="icon"></img>
                    <h1 className="h1_how_to">Zdecyduj komu chcesz pomóc</h1>
                    <div className="style_border"></div>
                    <p className="p_how_to">wybierz zaufane miejsce</p>

                </div>

                <div className="ht_describe_container">
                    <img src={icon1} alt="icon_refress" className="icon"></img>
                    <h1 className="h1_how_to">Zamów kuriera</h1>
                    <div className="style_border"></div>
                    <p className="p_how_to">kurier przyjedzie w wybrane miejsce</p>

                </div>

            </div>

            <div className="how_to_3">
                <div className="oddaj_rzeczy_button">
                    <p>ODDAJ<br />RZECZY</p>
                </div>

            </div>

        </div>
    )


}

export default How_to;
