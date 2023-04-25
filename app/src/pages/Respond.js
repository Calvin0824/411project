import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import { set } from 'mongoose';
import Logout from '../components/logout.js';
import withAuth from '../components/withAuth.js';

function Respond() {

    const [ weather, setWeather ] = useState([]); 
    const [ flight, setFlight ] = useState([]);

    async function Weather(city) {
        try {
            const weathers = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=40de535bf85e4305b02183509231004&q=singapore&days=7&aqi=no&alerts=no`
                );
            setWeather(weathers.data.forecast.forecastday);
            console.log(weather);
        } catch (error) {
            console.error(error);
        }
    };

    async function Flight() {
        try {
            const flights = axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-05-02&adults=1&nonStop=true&max=250', {
                headers: {
                  'Authorization': 'Bearer Gah0rSFYT1MAVUfcI9GpIFnQJxEe',
                  'Content-Type': 'application/json'
                }
              });
            setFlight((await flights).data.data);
            console.log(flight);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button onClick={Weather}>Get weather</button>
            <button onClick={Flight}>Get flight</button>
            <Logout/>
            <table>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Date</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Min Temperature</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Avg Temperature</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Max Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map((weather, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{weather.date}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{weather.day.mintemp_f}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{weather.day.avgtemp_f}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{weather.day.maxtemp_f}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <table>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Deadline</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Price</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Seats Left</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Departure Time</th>
                    <th style={{ border: '1px solid black', padding: '5px' }}>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {flight.map((flight, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{flight.lastTicketingDate}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{flight.price.total}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{flight.numberOfBookableSeats}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{flight.itineraries[0].segments[0].departure.at}</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>{flight.itineraries[0].segments[0].arrival.at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        
        </>
        
    )
}

export default withAuth(Respond);