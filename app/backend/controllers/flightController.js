import asyncHandler from 'express-async-handler'
import flight from '../models/flightModels.js'
import axios from 'axios'


// @desc    get Flights
// @route   Get /flight
// @access  Private
export const getFlights = () => {
    const flights = axios.get('curl "https://api.flightapi.io/onewaytrip/642626bd8251b8a4fe583b09/HEL/OUL/2022-05-20/1/0/0/Economy/USD"')
    console.log(flight)
}
