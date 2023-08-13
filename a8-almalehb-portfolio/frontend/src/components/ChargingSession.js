import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaTrash, FaPen } from "react-icons/fa6";


function ChargingSession({ chargingSession, onEdit, onDelete }) {

    const totalKwh = 1;
    const totalPrice = 1;

    return (
        <tr>
            <td>{chargingSession.time}</td>
            <td>{chargingSession.durationInSeconds}</td>
            <td>{chargingSession.address}</td>
            <td>{chargingSession.pricePerKwh}</td>
            <td>{totalKwh}</td>
            <td>{totalPrice}</td>
            <td><FaPen onClick={() => onEdit(chargingSession)} /></td>
            <td><FaTrash onClick={() => onDelete(chargingSession._id)} /></td>
        </tr>
    );
}

export default ChargingSession;