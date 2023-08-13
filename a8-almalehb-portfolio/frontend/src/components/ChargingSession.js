import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaTrash, FaPen } from "react-icons/fa6";


function ChargingSession({ chargingSession, onEdit, onDelete }) {

    const totalPrice = chargingSession.kwh * chargingSession.pricePerKwh;
    const date = new Date(chargingSession.date)
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

    return (
        <tr>
            <td><strong>{formattedDate}</strong></td>
            <td>{(chargingSession.durationInSeconds / 60).toFixed(2)}</td>
            <td>{chargingSession.address}</td>
            <td>$ {chargingSession.pricePerKwh.toFixed(2)}</td>
            <td>{chargingSession.kwh.toFixed(2)}</td>
            <td>$ {totalPrice.toFixed(2)}</td>
            <td><FaPen className="faIconButton" onClick={() => onEdit(chargingSession)} /></td>
            <td><FaTrash className="faIconButton sessionDeleteButton" onClick={() => onDelete(chargingSession._id)} /></td>
        </tr>
    );
}

export default ChargingSession;