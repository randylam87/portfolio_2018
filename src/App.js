import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles'
import Header from './Components/Header/Header';
import { theme } from './theme';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <div id='app'>
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);
