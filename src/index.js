import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './pages'
import { fetchPrograms } from './api'

(async () => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100";
    const dataRequirements = await fetchPrograms(url);
    Promise.all(dataRequirements).then(() => {
        hydrate(<App launchPrograms={dataRequirements} />, document.getElementById('root'));
    });
})();