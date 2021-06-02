import { Grid } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CocoMap from './features/CocoMap';
import CocoCards from './features/CocoCards';
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Grid container>
          <Grid item xs>
            <CocoCards />
          </Grid>
          <Grid item md={12}>
            <CocoMap zoomLevel={15} />
          </Grid>
        </Grid>
      </Provider>
    </div>
  )
}

export default App
