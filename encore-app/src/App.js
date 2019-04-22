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
            room_string: '',
            token: '',
        };

        this.updateStates = this.updateStates.bind(this)
        this.updateAuth = this.updateAuth.bind(this)
    }

    updateStates(obj) {
        this.setState(obj);
    }

    updateAuth(obj) {
        this.setState(obj);
    }

  render() {
        console.log("TOKEN:" + this.state.token);

    return (
      <div className="App">
          <Dashboard
              room_name={this.state.room_string}
              host={this.state.host}
              joined={this.state.joined}
              updateStates={this.updateStates}
              updateAuth={this.updateAuth}
          />
      </div>
    );
  }
}

export default App;
