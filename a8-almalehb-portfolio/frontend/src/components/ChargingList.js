import React from 'react';
import ChargingSession from './ChargingSession';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ChargingList({ chargingSessions, onDelete, onEdit }) {
    return (
        <table id="chargingSessions">
            <caption>Add new sessions or edit existing charging sessions</caption>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Address</th>
                    <th>Price per KwH</th>
                    <th>Total kWh</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {chargingSessions.map((chargingSession, i) => 
                    <ChargingSession 
                        chargingSession={chargingSession} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ChargingList;
