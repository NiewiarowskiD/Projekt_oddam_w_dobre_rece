import React from "react";
import "./_home.scss";
import Menu from "./Menu";
import Welcome from "./Welcome";
import Login from "./Login";
import home_image from "../../../src/assets/images/Home-Hero-Image.png";

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
        </div>
    )


}

export default Home;
