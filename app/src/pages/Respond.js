import NavBar from "../components/NavBar.js";
import React, { useState } from 'react'
import Axios from 'axios'


export default function Respond() {

    const [ weather, setWeather ] = useState([]); 
    const [ flight, setFlight ] = useState([]);
    const [ hotel, setHotel ] = useState([]);

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

    async function Flight() {
        try {
            const flights = Axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BOS&destinationLocationCode=PAR&departureDate=2023-05-02&adults=1&children=0&infants=0&travelClass=ECONOMY&nonStop=false&currencyCode=USD&max=250',{
                headers: {
                  'Authorization': `Bearer GuXRO0AEkwKdGeyrMCOt9d1M50pF`
                }
              });
            setFlight(flights);
            console.log(flight);
        } catch (error) {
            console.error(error);
        }
    };

    async function Hotel() {
        try {
            const hotels = Axios.get(
                "https://test.api.amadeus.com/v3/shopping/hotel-offers?cityCode=PAR&checkInDate=2022-05-01&checkOutDate=2022-05-07&radius=10&radiusUnit=KM", {
                    headers: {
                        'Authorization': `Bearer zAV3K1rtZasb2wcJuDGlNg4USIzK`
                      }  
                });
            setHotel(hotels);
            console.log(hotel);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <NavBar/>
            <button onClick={Weather}>Get weather</button>
            <button onClick={Flight}>Get flight</button>
            <button onClick={Hotel}>Get hotel</button>
        </>
    )
}