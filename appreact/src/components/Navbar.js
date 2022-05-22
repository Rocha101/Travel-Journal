import React from "react"
import AirLogo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={AirLogo} alt='airlogo' className="nav--logo"></img>
            <h1 className="titulo--pagina">Travel Journal</h1>
        </nav>
    )
}