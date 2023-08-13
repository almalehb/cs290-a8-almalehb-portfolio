import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const EditChargingPageTable = ({ chargingSessionToEdit }) => {

    const [time, setTime] = useState(chargingSessionToEdit.time);
    const [durationInSeconds, setDurationInSeconds] = useState(chargingSessionToEdit.durationInSeconds);

    const [duration, setDuration] = useState(0);
    const [durationUnits, setDurationUnits] = useState('');

    const [address, setAddress] = useState(chargingSessionToEdit.address);
    const [kwh, setKwh] = useState(chargingSessionToEdit.kwh);
    const [pricePerKwh, setPricePerKwh] = useState(chargingSessionToEdit.pricePerKwh);

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

    const editChargingSession = async () => {
        const response = await fetch(`/chargingSessions/${chargingSessionToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                time: time,
                durationInSeconds: durationInSeconds,
                address: address,
                kwh: kwh,
                pricePerKwh: pricePerKwh
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`Successfully updated your charging session at ${address}!`);
            redirect("/charging");
        } else {
            const errMessage = await response.json();
            alert(`We were unable to update your charging session. We received code = ${response.status}. ${errMessage.Error}`);
        }
    }

    return (
        <>
            <article>
                <h2>Edit a charging session</h2>
                <p>Modify any of the properties of an existing session.</p>
                <table id="chargingSessions">
                    <caption>What changes would you like to make?</caption>
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
                                    placeholder={chargingSessionToEdit.time}
                                    value={time}
                                    onChange={e => setTime(e.target.value.slice(0,10))}
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
                                    placeholder={chargingSessionToEdit.address}
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    id="Address" />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder={chargingSessionToEdit.kwh}
                                    value={kwh}
                                    min={0}
                                    onChange={e => setKwh(e.target.value)}
                                    id="kwh" />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder={chargingSessionToEdit.pricePerKwh}
                                    value={pricePerKwh}
                                    min={0}
                                    onChange={e => setPricePerKwh(e.target.value)}
                                    id="pricePerKwh" />
                            </td>
                            <td>

                                <button
                                    type="submit"
                                    onClick={editChargingSession}
                                    id="submit"
                                >Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
export default EditChargingPageTable;