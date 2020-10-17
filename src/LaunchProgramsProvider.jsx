import React, { useEffect, useState } from 'react';

const LaunchProgramsContext = React.createContext([]);

export const LaunchProgramsProvider = props => {
    const [hasError, setErrors] = useState(false);
    const [launchPrograms, setLaunchPrograms] = useState([]);
    async function fetchData() {
        const res = await fetch("https://api.spacexdata.com/v3/launches?limit=100");
        res.json()
            .then(res => setLaunchPrograms(res))
            .catch(err => setErrors(err));
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <LaunchProgramsContext.Provider value={launchPrograms}>
            <>{props.children}</>
        </LaunchProgramsContext.Provider>
    )
}
