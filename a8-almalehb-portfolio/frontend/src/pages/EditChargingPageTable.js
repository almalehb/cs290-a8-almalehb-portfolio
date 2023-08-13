import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditChargingPageTable = ({ chargingSessionToEdit }) => {
 
    const [time, setTime] = useState(chargingSessionToEdit.time);
    const [durationInSeconds, setDurationInSeconds] = useState(chargingSessionToEdit.durationInSeconds);
    const [address, setAddress] = useState(chargingSessionToEdit.address);
    const [kwh, setKwh] = useState(chargingSessionToEdit.kwh);
    const [pricePerKwh, setPricePerKwh] = useState(chargingSessionToEdit.pricePerKwh);
    
    const redirect = useNavigate();

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
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully updated your charging session at ${address}!`);
        } else {
            const errMessage = await response.json();
            alert(`We were unable to update your charging session. We received code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
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
                            placeholder={chargingSessionToEdit.time}
                            value={time}
                            onChange={e => setTime(e.target.value)} 
                            id="time" />
                    </td>

                    <td><label for="duration">Charging Duration</label>
                        <input
                            type="number"
                            value={durationInSeconds}
                            placeholder={chargingSessionToEdit.durationInSeconds}
                            onChange={e => setDurationInSeconds(e.target.value)} 
                            id="duration" />
                    </td>

                    <td><label for="Address">Address</label>
                        <input
                            type="text"
                            placeholder={chargingSessionToEdit.address}
                            value={address}
                            onChange={e => setAddress(e.target.value)} 
                            id="Address" />
                    </td>

                    <td><label for="kwh">kWh</label>
                        <input
                            type="number"
                            placeholder={chargingSessionToEdit.kwh}
                            value={kwh}
                            onChange={e => setKwh(e.target.value)} 
                            id="kwh" />
                    </td>

                    <td><label for="pricePerKwh">Price Per kWh</label>
                        <input
                            type="number"
                            placeholder={chargingSessionToEdit.pricePerKwh}
                            value={pricePerKwh}
                            onChange={e => setPricePerKwh(e.target.value)} 
                            id="pricePerKwh" />
                    </td>
                    <td>
                    <label for="submit">Commit</label>
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