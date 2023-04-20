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

export default function Respond() {
    return (
        <>
        <head>
  <link rel="stylesheet" href="style.css">
</head>
<form id="response-form">
  <label for="country-select">What country would you like to visit?</label>
  <select id="country-select" name="country">
    <option value="">-- Please select a country --</option>
    <option value="United States">United States</option>
    <option value="Canada">Canada</option>
    <option value="Mexico">Mexico</option>
    <option value="France">France</option>
    <option value="Spain">Spain</option>
    <option value="Italy">Italy</option>
    <option value="Germany">Germany</option>
    <option value="Japan">Japan</option>
    <option value="China">China</option>
    <option value="Australia">Australia</option>
  </select>

  <label for="duration-input">How long will you visit?</label>
  <input type="number" id="duration-input" name="duration">

  <div class="form-actions">
    <button type="submit" class="button button-primary">Submit</button>
    <button type="reset" class="button">Reset</button>
  </div>
</form>

<div id="feedback" style="display: none;">
  <p>Thank you for your response!</p>
</div>

<script>
  const form = document.getElementById('response-form');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const country = form.elements.country.value;
    const duration = form.elements.duration.value;

    if (!country || !duration) {
      alert('Please fill out all fields');
      return;
    }

    fetch('/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country, duration }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save response');
        }
        feedback.style.display = 'block';
        form.reset();
      })
      .catch(error => console.error(error));
  });
</script>
        </>
    )
}
