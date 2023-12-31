import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ChargingList from '../components/ChargingList';

function ChargingPage({ setChargingSession }) {

    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [chargingSessions, setChargingSessions] = useState([]);

    // RETRIEVE the entire list of chargingSession
    const loadChargingSessions = async () => {
        const response = await fetch('/chargingSessions');
        const chargingSessions = await response.json();
        setChargingSessions(chargingSessions);
    }

    // UPDATE a single chargingSession
    const onCreateChargingSession = async chargingSession => {
        redirect("/create");
    }

    // UPDATE a single chargingSession
    const onEditChargingSession = async chargingSession => {
        setChargingSession(chargingSession);
        redirect("/update");
    }

    // DELETE a single chargingSession  
    const onDeleteChargingSession = async _id => {
        const response = await fetch(`/chargingSessions/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/chargingSessions');
            const chargingSessions = await getResponse.json();
            setChargingSessions(chargingSessions);
        } else {
            console.error(`Unable to delete session with ID = ${_id}, received status code = ${response.status}`)
        }
    }

    // LOAD all the charging sessions
    useEffect(() => {
        loadChargingSessions();
    }, []);

    // DISPLAY the charging sessions
    return (
        <>
            <div>
                <h2>List of EV Charging Sessions</h2>
                <p>This table displays your charging history.</p>
                <ChargingList
                    chargingSessions={chargingSessions}
                    onCreate={onCreateChargingSession}
                    onEdit={onEditChargingSession}
                    onDelete={onDeleteChargingSession}
                />
            </div>
        </>
    );
}

export default ChargingPage;