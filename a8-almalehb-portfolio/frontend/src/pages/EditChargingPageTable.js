import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { FaPen } from "react-icons/fa6";

export const EditChargingPageTable = ({ chargingSessionToEdit }) => {

    const [date, setDate] = useState(new Date(chargingSessionToEdit.date).toISOString().slice(0, 10));
    const [durationInSeconds, setDurationInSeconds] = useState(chargingSessionToEdit.durationInSeconds);

    const [duration, setDuration] = useState(chargingSessionToEdit.durationInSeconds / 60);
    const [durationUnits, setDurationUnits] = useState('minutes');

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
                date: date,
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
                            <th>Date</th>
                            <th className='durationCol'>Duration</th>
                            <th>Address</th>
                            <th className='pricePerKwhCol'>Price per kWh</th>
                            <th className='kwhCol'>kWh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    id="date" className='chargingInput'/>
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
                                 <textarea name="address" minlength="3" maxlength="500" value={address} 
                                    onChange={e => setAddress(e.target.value)}
                                    id="address" className='chargingInput'/>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder={chargingSessionToEdit.pricePerKwh}
                                    value={pricePerKwh}
                                    min={0}
                                    onChange={e => setPricePerKwh(e.target.value)}
                                    id="pricePerKwh" className='chargingInput pricePerKwhCol'/>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    placeholder={chargingSessionToEdit.kwh}
                                    value={kwh}
                                    min={0}
                                    onChange={e => setKwh(e.target.value)}
                                    id="kwh" className='chargingInput kwhCol'/>
                            </td>


                            <td>

                                <FaPen className="faIconButton" onClick={editChargingSession} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
export default EditChargingPageTable;