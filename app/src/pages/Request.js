import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Logout from '../components/logout.js';
import withAuth from '../components/withAuth.js';

function Request() {

    const [ city, setCity ] = useState("");
    const [ date, setDate ] = useState("");
    const [ iata, setIATA ] = useState("");
    const { state } = useLocation();
    const user = state?.user;

    async function City() {
        try {
            const cities = axios.get(
                `https://airlabs.co/api/v9/cities?city_code=SIN&api_key=bff77658-dd93-4f22-865b-0ceb0b3c688e`
                );
            setCity((await cities).data.response[0].name)
            console.log(city)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <head>
  <link rel="stylesheet" href="style.css"/>
</head>
<h1>Hello {user?.name}</h1>
<form id="response-form">
  <label for="IATA-select">What city would you like to visit?</label>
  <select id="IATA-select" name="IATA">
    <option value="">-- Please select a city to visit --</option>
    <option value="BER">Berlin</option>
    <option value="ORD">Chicago</option>
    <option value="DEN">Denver</option>
    <option value="DUB">Dublin</option>
    <option value="FLL">Fort Lauderdale</option>
    <option value="LIS">Lisbon</option>
    <option value="LHR">London</option>
    <option value="LAX">Los Angeles</option>
    <option value="MDE">Medellin</option>
    <option value="MEX">Mexico City</option>
    <option value="MIA">Miama</option>
    <option value="YMX">Montreal</option>
    <option value="MYR">Myrtle Beach</option>
    <option value="BNA">Nashville</option>
    <option value="MSY">New Orleans</option>
    <option value="JFK">New York City</option>
    <option value="PAR">Paris</option>
    <option value="RIO">Rio de Janeiro</option>
    <option value="ROM">Rome</option>
    <option value="SYD">Sydney</option>

  </select>

  <label for="duration-input">When would you like to return?</label>
  <input type="date" id="duration-input" name="duration"/>

  <div class="form-actions">
    <button type="submit" class="button button-primary">Submit</button>
    <button type="reset" class="button">Reset</button>
  </div>
  <div class="logout">
    <Logout/>
  </div>
</form>
        </>
    )
}

export default withAuth(Request);
