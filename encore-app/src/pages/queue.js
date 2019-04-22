import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";

import SimpleTable from '../components/simple-table';
import MediaControlCard from '../components/media-control-card';

import NowPlayingCard from '../components/now-playing';


import img from '../assets/american-idiot.jpg'
import {pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";
const axios = require('axios');
const mockData = {
    songTitle: 'Holiday',
    artist: 'Green Day',
    image: img,
    imgDescr: 'Album cover for American Idiot'
};


const styles = theme => ({
    queue: {
        color: pink,
    }

});

class Queue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            currentSong: null,
        }
        this.getSongs = this.getSongs.bind(this)
        this.getCurrentSong = this.getCurrentSong.bind(this)
        this.handleVote = this.handleVote.bind(this)
    }

    componentDidMount(){
        this.getSongs();
        // this.getCurrentSong();
    }

     getSongs() {
        //Get songs to be passed into the table - aka the songs that are in the queue
        axios.get('/songs/')
        .then(response => {
        if (response.data) {
            //Returns sorted list
            var sorted = response.data.sort(function(a, b) {
                return parseFloat(b.votes) - parseFloat(a.votes);
            });
            this.setState({
                data: sorted
            }, () => this.getCurrentSong());
            return sorted;
        } else {
            console.log('Get Song: failed');
        }
        })
    }

    getCurrentSong() {
        let currentSong = null;
        //todo: use spotify API to get the current song playing - then assign it to the currentSong variable to pass into the media card

        if (this.state.data){
            currentSong = this.state.data[0]; //placeholder for now, just return the first object in the list
        }

        this.setState({
            currentSong: currentSong
        })
    }

    handleVote = (songObj, isUpvote) => {
        //takes in entire song object and handles whether it should be an upvote or downvote

        // const songObject = {
        //     spotify_id: songObj.spotify_id,
        //     title: songObj.title,
        //     artist: songObj.artist,
        //     cover_art: songObj.cover_art,
        //     runtime: 0,
        //     votes: 0
        // }
        let queryStr = '';
        const songID = songObj._id;
        console.log(songID);

        if (isUpvote){
            queryStr = '/upvote/' + songID
            console.log(queryStr)
            console.log(songObj)
        }
        else{
            queryStr = '/downvote/' + songID
        }

        axios.post(queryStr, songObj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log('voting error: ')
                console.log(error)
            });
    }

    render() {

        console.log(this.state.data)

        const { classes } = this.props;

        //prop if user is hosting session or joining session
        const hosting = this.props;

        const data = this.state.data;
        const currentSong = this.state.currentSong

        if (this.state.data === null || this.state.currentSong === null){
            return(
                <div>
                    <p>loading</p>
                </div>
            )
        }
        return (
            <MuiThemeProvider theme={THEME}>
                <div className="host-queue">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <h2 className={classes.queue}>Queue</h2>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <NowPlayingCard
                                imgUrl={currentSong.cover_art}
                                title={currentSong.title}
                                artist={currentSong.artist}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <SimpleTable
                                isHost={hosting}
                                fetchedData={data}
                                handleVote={this.handleVote}
                            />
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}


export default withStyles(styles)(Queue);
