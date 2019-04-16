import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { Route} from 'react-router-dom'
import './App.css';

import Entry from './pages/entry'
import NavTabs from './components/nav-tabs'
import BottomAppBar from './components/bottom-appbar'
import Dashboard from './pages/dashboard'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            host: false,
            joined: false,
            room_string: 'happy-apple',
        };

        this.updateStates = this.updateStates.bind(this)
    }

    updateStates(obj) {
        this.setState(obj);
    }

  render() {

        const roomName = 'main';
    return (
      <div className="App">
          <Dashboard
              room_name={this.state.room_string}
              host={this.state.host}
              joined={this.state.joined}
              updateStates={this.updateStates}
          />

          {/*<p>Hello world!</p>*/}
          {/*<Button variant="contained" color="primary">*/}
              {/*Hello World*/}
          {/*</Button>*/}
          {/*<NavTabs/>*/}

          {/*<Route*/}
              {/*exact path="/"*/}
              {/*component={Entry}*/}
          {/*/>*/}
          {/*<Route*/}
              {/*exact path="/dashboard"*/}
              {/*component={Dashboard}*/}
          {/*/>*/}
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
        <BottomAppBar/>
      </div>
    );
  }
}

export default App;
