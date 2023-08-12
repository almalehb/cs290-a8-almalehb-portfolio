// Controllers for the Charging Collection

import 'dotenv/config';
import express from 'express';
import * as chargingSessions from './charging-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/chargingSessions', (req, res) => {
    chargingSessions.createChargingSession(
        req.body.time,
        req.body.durationInSeconds,
        req.body.address,
        req.body.kwh,
        req.body.pricePerKwh
    )
        .then(chargingSession => {
            res.status(201).json(chargingSession);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'There was an error in the request. Unable to create the charging entry.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/chargingSessions', (req, res) => {
    chargingSessions.retrieveChargingSessions()
        .then(chargingSession => {
            if (chargingSession !== null) {
                res.json(chargingSession);
            } else {
                res.status(404).json({ Error: 'There are no charging sessions available.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was an error in the request to retrieve charging sessions.' });
        });
});


// RETRIEVE by ID controller
app.get('/chargingSessions/:_id', (req, res) => {
    chargingSessions.retrieveChargingSessionByID(req.params._id)
        .then(chargingSession => {
            if (chargingSession !== null) {
                res.json(chargingSession);
            } else {
                res.status(404).json({ Error: 'The requested charging session does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was an error in the request to retrieve the charging session.' });
        });

});


// UPDATE controller ************************************
app.put('/chargingSessions/:_id', (req, res) => {
    chargingSessions.updateChargingSession(
        req.params._id,
        req.body.time,
        req.body.durationInSeconds,
        req.body.address,
        req.body.kwh,
        req.body.pricePerKwh
    )
        .then(chargingSession => {
            res.json(chargingSession);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'There was an error in the request to update the charging session.' });
        });
});


// DELETE Controller ******************************
app.delete('/chargingSessions/:_id', (req, res) => {
    chargingSessions.deleteChargingSessionById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Successfully deleted the charging session.' });
            } else {
                res.status(404).json({ Error: 'Unable to find the charging session to be deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'There was an error in the request to delete the charging session.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});