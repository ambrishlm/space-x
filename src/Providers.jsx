import React from 'react';
import { LaunchProgramsProvider } from './LaunchProgramsProvider';
import { App } from './pages'

export const Providers = () => (

    <LaunchProgramsProvider>
        <App />
    </LaunchProgramsProvider>

);