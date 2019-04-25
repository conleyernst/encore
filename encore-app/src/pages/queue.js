import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import SimpleTable from '../components/simple-table';
import NowPlayingCard from '../components/now-playing';
import {pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";
import {toRenderProps} from "recompose";
import withWidth from "@material-ui/core/es/withWidth/withWidth";

const axios = require('axios');


const styles = theme => ({
    queue: {
        color: pink,
        fontFamily:  "Bowlby One SC",
        fontSize: 30,
        textShadow: '5px 10px 18px rgba(0,0,0,0.2)',
    },
    cardHolder: {
        maxWidth: '100%',
    }
});

const WithWidth = toRenderProps(withWidth());

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
        this.handleVeto = this.handleVeto.bind(this)
        this.reRender = this.reRender.bind(this)
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
            currentSong = this.state.data[1]; //placeholder for now, just return the first object in the list
        }

        this.setState({
            currentSong: currentSong
        })
    }

    handleVote = (songObj, isUpvote) => {
        //takes in entire song object and handles whether it should be an upvote or downvote
        let queryStr = '/songs';
        const songID = songObj._id;
        console.log(songID);
        console.log(isUpvote);

        if (isUpvote){
            queryStr += '/upvote/' + songID
            console.log(queryStr)
            console.log(songObj)
        }
        else{
            queryStr += '/downvote/' + songID
            console.log(queryStr)
            console.log(songObj)
        }

        axios.post(queryStr, songObj,{
            headers: {'Content-Type': 'application/json',}
        })
            .then(res => console.log(res.data))
            .catch(error => {
                console.log('voting error: ')
                console.log(error)
            });

        axios.get('/songs/' + songID).then(res => {
            console.log("result:");
            console.log(res);
            if (res.data.votes <= -5) {
                axios.post('/songs/veto/' + songID, {
                    headers: {'Content-Type': 'application/json',}
                }).then(res => {
                    console.log('Removed automatically: ' + songID);
                    console.log(res.data)
                });
            }
        }).catch(err => {
            console.log("Auto song removal error");
            console.error(err);
            }
        );

        this.reRender();
    }

    handleVeto = (songObj) => {
        const songID = songObj._id;
        const queryStr = '/songs/veto/' + songID;
        console.log(songID);


        axios.post(queryStr, songObj,{
            headers: {'Content-Type': 'application/json',}
        })
            .then(res => console.log(res.data))
            .catch(error => {
                console.log('veto error: ')
                console.log(error)
            });
        this.reRender();
    }

    reRender = () => {
        this.getSongs();
        this.render();
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
                                <h2 className={classes.queue}>Welcome to the Party</h2>
                        </Grid>
                        <Grid className={classes.cardHolder} item xs={12} sm={4}>
                            <NowPlayingCard
                                imgUrl={currentSong.cover_art}
                                title={currentSong.title}
                                artist={currentSong.artist}
                            />
                        </Grid>
                        {/*<Grid className={classes.cardHolder} item xs={12} sm={4}>*/}
                            {/*<WithWidth>*/}
                                    {/*{({ width }) => <div>*/}
                                        {/*{width === 'xs' &&*/}
                                        {/*<Grid className={classes.cardHolder} item xs={12} sm={4}>*/}
                                            {/*<NowPlayingCard*/}
                                                    {/*imgUrl={currentSong.cover_art}*/}
                                                    {/*title={currentSong.title}*/}
                                                    {/*artist={currentSong.artist}*/}
                                                    {/*isMobile={true}*/}
                                                {/*/>*/}
                                        {/*</Grid>*/}
                                        {/*}*/}
                                        {/*{width !== 'xs' &&*/}
                                        {/*<Grid className={classes.cardHolder} item xs={12} sm={4}>*/}
                                            {/*<NowPlayingCard*/}
                                                    {/*imgUrl={currentSong.cover_art}*/}
                                                    {/*title={currentSong.title}*/}
                                                    {/*artist={currentSong.artist}*/}
                                                    {/*isMobile={false}*/}
                                                {/*/>*/}
                                        {/*</Grid>*/}
                                        {/*}*/}

                                    {/*</div>}*/}
                            {/*</WithWidth>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={8}>
                            <WithWidth>
                                {({ width }) => <div>
                                    {width === 'xs' &&
                                        <SimpleTable
                                            isHost={hosting}
                                            fetchedData={data}
                                            handleVote={this.handleVote}
                                            handleVeto={this.handleVeto}
                                            reRender={this.reRender}
                                            isMobile={true}
                                        />
                                    }
                                    {width !== 'xs' &&
                                        <SimpleTable
                                            isHost={hosting}
                                            fetchedData={data}
                                            handleVote={this.handleVote}
                                            handleVeto={this.handleVeto}
                                            reRender={this.reRender}
                                            isMobile={false}
                                        />
                                    }
                                </div>}
                            </WithWidth>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}


export default withStyles(styles)(Queue);
