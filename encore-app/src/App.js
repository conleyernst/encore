import React, { Component } from 'react';
import './App.css';
import Dashboard from './pages/dashboard'

const axios = require('axios');

var scopes = 'user-read-private user-read-email';
const URL = 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + 'f73f2a98b84e4d399b54992b7f548173' +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent('http://localhost:3000');

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
        var part = window.location.hash.substr(1);
        console.log(part);
        part.split("&").forEach(function(part) {
            var item = part.split("=");
            vars[item[0]] = decodeURIComponent(item[1]);
         });
        console.log(vars)
        var authcode = vars.access_token;
        console.log(authcode)

        this.setState({
            token: authcode
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
