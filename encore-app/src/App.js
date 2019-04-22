import React, { Component } from 'react';
import './App.css';
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
