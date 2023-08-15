import React from 'react';
import ChargingSession from './ChargingSession';

// Change the function names and parameters 
// to fit your portfolio topic and schema.
import { FaCirclePlus } from "react-icons/fa6";

function ChargingList({ chargingSessions, onCreate, onDelete, onEdit }) {
    return (
        <table id="chargingSessionsTable">
            <caption>Add new sessions or edit existing charging sessions.
                <div className="addSessionContainer" onClick={onCreate}>
                    <span>Add Session</span>
                    <FaCirclePlus id="addChargingButton"
                        className="faIconButton" />
                </div>
            </caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Duration (Minutes)</th>
                    <th>Address</th>
                    <th>Price per kWh</th>
                    <th>Total kWh</th>
                    <th>Total Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
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
