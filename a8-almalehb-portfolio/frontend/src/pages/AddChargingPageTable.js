import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.
import { FaCirclePlus } from "react-icons/fa6";

export const AddChargingPageTable = () => {

    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    const [date, setDate] = useState(formattedDate);
    const [durationInSeconds, setDurationInSeconds] = useState(0);

    const [duration, setDuration] = useState(0);
    const [durationUnits, setDurationUnits] = useState('minutes');

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

        const newChargingSession = { date, durationInSeconds, address, kwh, pricePerKwh };
        const response = await fetch('/chargingSessions', {
            method: 'post',
            body: JSON.stringify(newChargingSession),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`Successfully added your new charging session at ${address}!`);
            redirect("/charging");
        } else {
            alert(`We were unable to add your charging session. We received error code = ${response.status}`);
        }
    };

    return (
        <>
            <article>
                <h2>Add a charging session</h2>
                <p>Tell us about your new charging session.</p>
                <table id="chargingSessionsTable">
                    <caption>Enter the details for the session.</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th className='durationCol'>Duration</th>
                            <th>Address</th>
                            <th className='pricePerKwhCol'>Price per kWh</th>
                            <th className="kwhCol" >kWh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="date"
                                    placeholder="Date and date of your charging session."
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    id="date"
                                    className='chargingInput'
                                    />
                            </td>

                            <td>
                                <div className="chargeDurationContainer durationCol">
                                    <input
                                        type="number"
                                        value={duration}
                                        min={0}
                                        onChange={e => setDuration(e.target.value)}
                                        className="chargeDuration chargingInput" />
                                    <select className="timeUnitSelection chargingInput" defaultValue={'minutes'} onChange={e => setDurationUnits(e.target.value)} >
                                        <option value="seconds">Seconds</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                    </select>
                                </div>
                            </td>

                            <td>
                                <textarea name="address" minlength="3" maxlength="500"
                                    placeholder="Location of the charging session." value={address} 
                                    onChange={e => setAddress(e.target.value)}
                                    id="address" className='chargingInput'/>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="Price per kilowatt-hour."
                                    value={pricePerKwh}
                                    min={0}
                                    onChange={e => setPricePerKwh(e.target.value)}
                                    id="pricePerKwh" className='chargingInput pricePerKwhCol'/>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder="Kilowatt-hour amount."
                                    value={kwh}
                                    min={0}
                                    onChange={e => setKwh(e.target.value)}
                                    id="kwh" className='chargingInput kwhCol'/>
                            </td>

                            <td>
                                <FaCirclePlus
                                    className="faIconButton"
                                    id="addChargingButton" onClick={addChargingSession} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default AddChargingPageTable;