import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';

import Header from './Components/Header';
import TrackList from './Components/TrackList';
import Footer from './Components/Footer';
import Procedures from './Components/Procedures';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
        <Paper className="container">
            <Row>
              <TrackList/>
              <Procedures/>
            </Row>
        </Paper>
        <Footer/>
      </MuiThemeProvider>
    );
  }
}

export default App;
