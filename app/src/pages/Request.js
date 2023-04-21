import React, { useState } from 'react'
import axios from 'axios'

export default function Respond() {
  const form = document.getElementById('response-form');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const country = form.elements.country.value;
    const duration = form.elements.duration.value;

    if (!country || !duration) {
      alert('Please fill out all fields');
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

  

    return (
        <>
        <head>
  <link rel="stylesheet" href="style.css"/>
</head>
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
  <input type="number" id="duration-input" name="duration"/>

  <div class="form-actions">
    <button type="submit" class="button button-primary">Submit</button>
    <button type="reset" class="button">Reset</button>
  </div>
</form>

<div id="feedback" style="display: none;">
  <p>Thank you for your response!</p>
</div>
        </>
    )
}
