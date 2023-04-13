import NavBar from "../components/NavBar.js";
import React, { useState } from 'react'
import Axios from 'axios'


export default function Request() {

    const [ weather, setWeather ] = useState([]); 

    async function Weather() {
        try {
            const weathers = await Axios.get(
                "http://api.weatherapi.com/v1/forecast.json?key=40de535bf85e4305b02183509231004&q=New_York&days=7&aqi=no&alerts=no"
                );
            setWeather(weathers);
            console.log(weather);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <NavBar/>
            <button onClick={Weather}>Get Weather</button>
        </>
    )
}