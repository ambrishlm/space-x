import express from 'express'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { App } from '../pages';
import { fetchPrograms } from '../api'

const router = express.Router()

router.get('/', async (req, res) => {
  const dataRequirements = await fetchPrograms();
  Promise.all(dataRequirements).then(() => {
    const reactComp = renderToNodeStream(<App launchPrograms={dataRequirements} />)
    res.status(200).render('pages/index', { reactApp: reactComp })
    res.send(reactComp);
  });
})


export default router
