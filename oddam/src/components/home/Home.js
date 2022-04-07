import React from "react";
import "./_home.scss";
import Menu from "./Menu";
import Welcome from "./Welcome";
import Login from "./Login";
import Three_colums from "./Three_colums";
import How_to from "./How_to";
import home_image from "../../../src/assets/images/Home-Hero-Image.png";
import About from "./About";

import Carousel_app from "./Carousel";

function Home(){

    return (
        <div className="home_container">
            <div className="first_page">
                <div className="left_welcome_container">
                    <img src={home_image} alt="home_image" className="home_image"></img>

                </div>

                <div className="right_welcome_container">
                    <Login />
                    <Menu />
                    <Welcome />
                </div>

            </div>
            <Three_colums />
            <How_to />
            <About />

        </div>
    )


}

export default Home;
