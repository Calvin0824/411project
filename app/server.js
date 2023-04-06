import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/user', (req, res) => {
    res.json({ message: 'Get users'})
})

app.listen(port, () => {
    console.log('Node API app is running on port 3000')
})