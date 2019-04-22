import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { Route} from 'react-router-dom'
import './App.css';

import Entry from './pages/entry'
import NavTabs from './components/nav-tabs'
import BottomAppBar from './components/bottom-appbar'
import Dashboard from './pages/dashboard'
import Redirect from "react-router-dom/es/Redirect";
import Link from "@material-ui/core/es/Link/Link";
import Router from "react-router-dom/es/Router";

const axios = require('axios');

var scopes = 'user-read-private user-read-email';
const URL = 'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + 'f73f2a98b84e4d399b54992b7f548173' +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent('http://localhost:3000');


// const GO = <Dashboard
//     room_name={this.state.room_string}
//     host={this.state.host}
//     joined={this.state.joined}
//     updateStates={this.updateStates}
//     updateAuth={this.updateAuth}
//     updateRedirect={this.updateRedirect}
// />;

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
        // this.updateRedirect = this.updateRedirect.bind(this)
        this.getAuth = this.getAuth.bind(this)
    }

    componentDidMount(){
        this.getAuth()
    }

    updateStates(obj) {
        this.setState(obj);
    }

    updateAuth(obj) {
        this.setState(obj);
    }

    getAuth() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        this.setState({
            token: vars.code
        })
    }

  render() {
        console.log(this.state.token);
        return (
            <div className="App test">
                <Dashboard
                    room_name={this.state.room_string}
                    host={this.state.host}
                    joined={this.state.joined}
                    token={this.state.token}
                    updateStates={this.updateStates}
                    updateAuth={this.updateAuth}
                />
            </div>
        );
  }
}

export default App;
