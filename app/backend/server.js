import express from 'express'
import colors from 'colors'
import userRoutes from './routes/users.js';
import { errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv';
dotenv.config();
import { getFlights } from './controllers/flightController.js';
import mongoose from 'mongoose'

connectDB()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', userRoutes)
app.use(getFlights)

app.use(errorHandler)

app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})