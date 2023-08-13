import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function ChargingSession({ chargingSession, onEdit, onDelete }) {

    const totalKwh = 1;
    const totalPrice = 1;

    return (
        <tr>
            <td>{chargingSession.time}</td>
            <td>{chargingSession.duration}</td>
            <td>{chargingSession.address}</td>
            <td>{chargingSession.pricePerKwh}</td>
            <td>{totalKwh}</td>
            <td>{totalPrice}</td>
            <td><MdDeleteForever onClick={() => onDelete(chargingSession._id)} /></td>
            <td><MdEdit onClick={() => onEdit(chargingSession)} /></td>
        </tr>
    );
}

export default ChargingSession;