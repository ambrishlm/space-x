import React, {  useState, useEffect } from 'react';
import './App.css';
import { Title } from '../components/Title';
import { Footer } from '../components/Footer';
import { Filter } from '../components/Filter';
import { Card } from '../components/Card';
import { fetchPrograms } from '../api';
import Loader from 'react-loader-spinner';

export const App = React.memo(({ launchPrograms }) => {
    const [programs, setPrograms] = useState(launchPrograms);
    const [filterState, setFilterState] = useState({ launch_success: "", land_success: "", launch_year: "" });
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        const url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${filterState.launch_success}&land_success=${filterState.land_success}&launch_year=${filterState.launch_year}`;
        const launches = await fetchPrograms(url);
        setPrograms(launches);
        setLoading(prev => !prev);
        window.scroll(0,0);
    }

    useEffect(() => {
        setLoading(prev => !prev);
        fetchData();
        return () => console.log('unmounting...');
    }, [filterState])

    return (
        <div className="app-container">
            <Title />
            <div className="content-container">
                <div className="filter-container">
                    <Filter setFilterState={setFilterState} />
                </div>
                <div className="cards-container">
                    {loading ? <LoadingIndicator /> : programs.map((program, index) => (<Card key={index} data={program} />))}
                </div>
            </div>
            <Footer />
        </div>
    )
})

export const LoadingIndicator = React.memo(() => {
    return (<div
        style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>)
})