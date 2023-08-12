// Models for the Charging Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: 'Unable to connect to MongoDB server. Please try again later.' });
    } else {
        console.log('Successfully connected to MongoDB server!');
    }
});

// SCHEMA: Define the collection's schema.
const chargingSchema = mongoose.Schema({
    time: { type: Date, required: true },
    durationInSeconds: {
        type: Number,
        required: true,
        min: 1
    },
    address: {
        type: String,
        required: true,
        minLength: 1
    },
    kwh: {
        type: Number,
        required: true,
        min: 0.01
    },
    pricePerKwh: {
        type: Number,
        required: true,
        min: 0
    }
});

// Compile the model from the schema 
// by defining the collection name "chargingSessions".
const chargingSessions = mongoose.model('Charging', chargingSchema);


// CREATE model *****************************************
const createChargingSession = async (time, durationInSeconds, address, kwh, pricePerKwh) => {
    const chargingSession = new chargingSessions({
        time: time,
        durationInSeconds: durationInSeconds,
        address: address,
        kwh: kwh,
        pricePerKwh: pricePerKwh
    });
    return chargingSession.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveChargingSessions = async () => {
    const query = chargingSessions.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveChargingSessionByID = async (_id) => {
    const query = chargingSessions.findById({ _id: _id });
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteChargingSessionById = async (_id) => {
    const result = await chargingSessions.deleteOne({ _id: _id });
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateChargingSession = async (_id, time, durationInSeconds, address, kwh, pricePerKwh) => {
    const result = await chargingSessions.replaceOne({ _id: _id }, {
        time: time,
        durationInSeconds: durationInSeconds,
        address: address,
        kwh: kwh,
        pricePerKwh: pricePerKwh
    });
    return {
        _id: _id,
        time: time,
        durationInSeconds: durationInSeconds,
        address: address,
        kwh: kwh,
        pricePerKwh: pricePerKwh
    }
}

// EXPORT the variables for use in the controller file.
export { createChargingSession, retrieveChargingSessions, retrieveChargingSessionByID, updateChargingSession, deleteChargingSessionById }