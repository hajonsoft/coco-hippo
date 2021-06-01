import React, { useState } from 'react'
import './App.css'
import CocoMap from './features/CocoMap'
import CocoStatus from './features/CocoStatus'
import data from './data/database.json';
import { Grid } from '@material-ui/core';


function App() {
  const [selectedRobot, setSelectedRobot] = useState(Object.keys(data.robots)[0])

  const handleOnSelectionChanged = (newRobot) => {
    setSelectedRobot(newRobot)
  }

  return (
    <div className="App">
      <Grid container>
        <Grid item xs>
          <CocoStatus data={data} selectedRobot={selectedRobot} onSelectionChange={handleOnSelectionChanged} />
        </Grid>
        <Grid item md={12}>
          <CocoMap data={data} defaultCenter={data.robots[selectedRobot].location} zoomLevel={15} key={selectedRobot} />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
