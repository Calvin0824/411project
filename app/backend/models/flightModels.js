import mongoose, { mongo } from 'mongoose'

const flightSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true,
        },
        departureTime: {
            type: String,
            required: true,
        },
        arrivalTime: {
            type: String,
            required: true,
        },
        departureLocation: {
            type: String,
            required: true,
        },
        arrivalLocation: {
            type: String,
            required: true,
        }
    }
)

const flight = mongoose.model("flight", flightSchema)
export default flight