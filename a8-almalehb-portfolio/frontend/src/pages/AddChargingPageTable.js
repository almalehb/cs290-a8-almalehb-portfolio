import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddChargingPageTable = () => {

    const [time, setTime] = useState(Date());
    const [durationInSeconds, setDurationInSeconds] = useState(0);
    const [address, setAddress] = useState('');
    const [kwh, setKwh] = useState(0);
    const [pricePerKwh, setPricePerKwh] = useState(0);
    
    const redirect = useNavigate();

    const addChargingSession = async () => {

        const totalPrice = durationInSeconds * pricePerKwh

        const newChargingSession = { time, durationInSeconds, address, kwh };
        const response = await fetch('/chargingSessions', {
            method: 'post',
            body: JSON.stringify(newChargingSession),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added your new charging session at ${address}!`);
        } else {
            alert(`We were unable to add your charging session. We received error code = ${response.status}`);
        }
        redirect("/");
    };

    return (
        <>
        <article>
            <h2>Add a charging session</h2>
            <p>Tell us about your new charging session.</p>
            
            <table id="chargingSessions">
                <caption>Enter the details for the session.</caption>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Duration (Seconds)</th>
                        <th>Address</th>
                        <th>kWh</th>
                        <th>Price per kWh</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="time">Charging Time</label>
                        <input
                            type="date"
                            placeholder="Date and time of your charging session."
                            value={time}
                            onChange={e => setTime(e.target.value)} 
                            id="time" />
                    </td>

                    <td><label for="duration">Charging Duration</label>
                        <input
                            type="number"
                            value={durationInSeconds}
                            placeholder="Duration in seconds."
                            onChange={e => setDurationInSeconds(e.target.value)} 
                            id="duration" />
                    </td>

                    <td><label for="Address">Address</label>
                        <input
                            type="text"
                            placeholder="Location of the charging session."
                            value={address}
                            onChange={e => setAddress(e.target.value)} 
                            id="Address" />
                    </td>

                    <td><label for="kwh">kWh</label>
                        <input
                            type="number"
                            placeholder="Kilowatt-hour amount."
                            value={kwh}
                            onChange={e => setKwh(e.target.value)} 
                            id="kwh" />
                    </td>

                    <td><label for="pricePerKwh">Price Per kWh</label>
                        <input
                            type="number"
                            placeholder="Price per kilowatt-hour."
                            value={pricePerKwh}
                            onChange={e => setPricePerKwh(e.target.value)} 
                            id="pricePerKwh" />
                    </td>

                    <td>
                    <label for="submit">Submit when ready</label>
                        <button
                            type="submit"
                            onClick={addChargingSession}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddChargingPageTable;