import React, { useState, useEffect } from 'react';
import './Filter.css';
import { Button } from './Button'

export const Filter = ({ setFilterState }) => {
    const [year, setYear] = useState('');
    const [landing, setLanding] = useState('');
    const [launching, setLaunching] = useState('');

    const yearOptions = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const launchOptions = ['true', 'false'];
    const landingOptions = ['true', 'false'];

    useEffect(() => {
        setFilterState(prevState => ({
            ...prevState,
            launch_year: year,
        }));
        return () => console.log('unmounting...');
    }, [year]);

    useEffect(() => {
        setFilterState(prevState => ({
            ...prevState,
            land_success: landing
        }));
        return () => console.log('unmounting...');
    }, [landing]);

    useEffect(() => {
        setFilterState(prevState => ({
            ...prevState,
            launch_success: launching
        }));
        return () => console.log('unmounting...');
    }, [launching]);

    return (
        <>
            <h2>Filters</h2>
            <div className="filters">
                <section>
                    <h3>Launch Year</h3>
                    <div className="filter-option" >
                        {yearOptions.map((yearOption, index) =>
                            <Button 
                                key={index} 
                                active={year.toString() === yearOption.toString()} 
                                setOption={setYear} 
                                option={yearOption} 
                            />
                        )}
                    </div>
                </section>
                <section>
                    <h3>Successful Lunch</h3>
                    <div className="filter-option" >
                        {launchOptions.map((launchOption, index) =>
                            <Button 
                                key={index} 
                                active={launching.toString() === launchOption.toString()} 
                                setOption={setLaunching} 
                                option={launchOption} 
                            />
                        )}
                    </div>
                </section>
                <section>
                    <h3>Successful Landing</h3>
                    <div className="filter-option" >
                        {landingOptions.map((landingOption, index) =>
                            <Button 
                                key={index} 
                                active={landing.toString() === landingOption.toString()} 
                                setOption={setLanding} 
                                option={landingOption} 
                            />
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}