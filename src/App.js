import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import Header from './Components/Header/Header';
import { theme } from './theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalScrollPosition: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    const { verticalScrollPosition } = this.state;
    console.log(verticalScrollPosition);
  }

  handleScroll() {
    this.setState({
      verticalScrollPosition: window.scrollY,
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id="app">
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);
