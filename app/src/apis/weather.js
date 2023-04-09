import React from 'react'
import Axios from 'axios'
import { response } from 'express'

export function Weather() {
    const weather = () => {
        Axios.get("http://api.weatherstack.com/current?access_key=7163a01cc6c0ff276e49d7e5553e22c2&query=New_York&units=f").then(
            (response) => {
                console.log(response);
            }
        )
    }
}