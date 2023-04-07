import express from 'express'
const router = express.Router()
import { getFlights } from '../controllers/flightController.js'

router.route('/').get(getFlights)

export default router
