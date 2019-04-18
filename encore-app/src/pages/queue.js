import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";

import SimpleTable from '../components/simple-table';
import MediaControlCard from '../components/media-control-card';


import img from '../assets/american-idiot.jpg'
const axios = require('axios');
const mockData = {
    songTitle: 'Holiday',
    artist: 'Green Day',
    image: img,
    imgDescr: 'Album cover for American Idiot'
};

class Queue extends Component {
    constructor(props) {
        super(props)
        this.state = [{
            songid: '',
            votes: ''
        }]
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        //this.getSongs = this.getSongs.bind(this)

    }

    handleChange(event) {
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    handleSubmit(event) {
        // event.preventDefault()
        // console.log('handleSubmit')
        //
        // axios
        //     .post('/user/login', {
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        //     .then(response => {
        //         console.log('login response: ')
        //         console.log(response)
        //         if (response.status === 200) {
        //             // update App.js state
        //             this.props.updateUser({
        //                 loggedIn: true,
        //                 username: response.data.username
        //             })
        //             // update the state to redirect to home
        //             this.setState({
        //                 redirectTo: '/'
        //             })
        //         }
        //     }).catch(error => {
        //     console.log('login error: ')
        //     console.log(error);
        // })
    }

     getSongs() {
        //GET call here should return json objects
        axios.get('/songs/')
        .then(response => {
        if (response.data) {
            //Returns sorted list
            var sorted = response.data.sort(function(a, b) {
                return parseFloat(b.votes) - parseFloat(a.votes);
            });
            this.setState({
                data: sorted
            });
            return sorted;
        } else {
            console.log('Get Song: failed');
        }   
        })
    }

    render() {
        const hosting = this.props;
        console.log("Q: " + hosting)
        this.getSongs();
        console.log(this.state.data);
        return (
            <div className="host-queue">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <h2>Host Page!</h2>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Currently Playing</h2>
                        <MediaControlCard
                            title={mockData.songTitle}
                            artist={mockData.artist}
                            img={mockData.image}
                            descr={mockData.imgDescr}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <SimpleTable
                            isHost={hosting}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Queue
