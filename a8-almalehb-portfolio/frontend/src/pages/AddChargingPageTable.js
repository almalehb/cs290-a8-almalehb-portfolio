import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddChargingPageTable = () => {

    const [time, setTime] = useState(Date());
    const [durationInSeconds, setDurationInSeconds] = useState(0);

    const [duration, setDuration] = useState(0);
    const [durationUnits, setDurationUnits] = useState('');

    const [address, setAddress] = useState('');
    const [kwh, setKwh] = useState(0);
    const [pricePerKwh, setPricePerKwh] = useState(0);

    const redirect = useNavigate();

    useEffect(() => {
        let durationResult = 0; 
        if (durationUnits === "hours") { 
            durationResult = duration * 60 * 60
        } else if (durationUnits === "minutes") {
            durationResult = duration * 60
        } else { 
            durationResult = duration
        }
        setDurationInSeconds(durationResult);
    }, [durationUnits, duration]);

    const addChargingSession = async () => {

        const totalPrice = durationInSeconds * pricePerKwh;

        const newChargingSession = { time, durationInSeconds, address, kwh };
        const response = await fetch('/chargingSessions', {
            method: 'post',
            body: JSON.stringify(newChargingSession),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`Successfully added your new charging session at ${address}!`);
        } else {
            alert(`We were unable to add your charging session. We received error code = ${response.status}`);
        }
    };

    return (
        <>
            <article>
                <h2>Add a charging session</h2>
                <p>Tell us about your new charging session.</p>
                <p>Current duration in seconds: {durationInSeconds}</p>
                <table id="chargingSessions">
                    <caption>Enter the details for the session.</caption>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Duration</th>
                            <th>Address</th>
                            <th>kWh</th>
                            <th>Price per kWh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="date"
                                    placeholder="Date and time of your charging session."
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    id="time" />
                            </td>

                            <td>
                                <div className="charge-duration-container">
                                    <input
                                        type="number"
                                        value={duration}
                                        min={0}
                                        onChange={e => setDuration(e.target.value)}
                                        className="charge-duration" />
                                    <select className="time-unit-select" onChange={e => setDurationUnits(e.target.value)}> 
                                        <option value="seconds">Seconds</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                    </select>
                                </div>
                            </td>

                            <td>
                                <input
                                    type="text"
                                    placeholder="Location of the charging session."
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    id="Address" />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="Kilowatt-hour amount."
                                    value={kwh}
                                    min={0}
                                    onChange={e => setKwh(e.target.value)}
                                    id="kwh" />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="Price per kilowatt-hour."
                                    value={pricePerKwh}
                                    min={0}
                                    onChange={e => setPricePerKwh(e.target.value)}
                                    id="pricePerKwh" />
                            </td>

                            <td>

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