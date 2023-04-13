import React, { useState } from 'react'
import Axios from 'axios'

export async function Weather() {
    const [ weather, setWeather ] = useState([]); 
    
    const weathers = await Axios.get("http://api.weatherapi.com/v1/forecast.json?key=a&q=New_York&days=3&aqi=no&alerts=no");
    setWeather(weathers.data.results);
    console.log(weather);
}
