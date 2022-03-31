import React from "react";
import "./_login.scss";
import {
    Link
} from "react-router-dom";

function Login(){

    return (
        <div className="login_container">
            <ul>
                <li>
                    <Link to="/login">Zaloguj </Link>
                </li>
                <li>
                    Załóż konto
                </li>
            </ul>

        </div>


    )


}

export default Login;
