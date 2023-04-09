import NavBar from "../components/NavBar.js";
import { Weather } from "../apis/weather.js";
import React from "react";


export default function Request() {
    return (
        <>
            <NavBar/>
            <button onClick={Weather}>Get Weather</button>
        </>
    )
}