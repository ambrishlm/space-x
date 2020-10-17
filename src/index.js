import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './pages'
import { fetchPrograms } from './api'

(async () => {
    const dataRequirements = await fetchPrograms();
    Promise.all(dataRequirements).then(() => {
        hydrate(<App launchPrograms={dataRequirements} />, document.getElementById('root'));
    });
})();