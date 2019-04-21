import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

import Queue from './queue'
import {extra_light_blue, extra_light_pink, pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";

const adj = [
    'happy',
    'funky',
    'crazy',
    'cool',
    'content',
    'pleased',
    'cheerful',
    'jovial',
    'jolly',
    'glad',
    'thrilled',
    'elated',
    'gleeful',
    'sunny'
];

const nouns = [
    'apple',
    'cat',
    'dance',
    'speakers'
];


const styles = theme => ({
    hostText: {
        color: pink,
        margin: 20,
    },
    hostBtn: {
        margin: 20,
        // color: theme.palette.primary,
        color: extra_light_pink
    },
});

class Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQueue: false,
            roomId: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.generateRoomId = this.generateRoomId.bind(this)
    }

    componentDidMount(){
        const str = this.generateRoomId();
        this.setState({
            roomId: str
        });
    }

    generateRoomId(){
        const min = 0;
        const maxOne = adj.length;
        const maxTwo = nouns.length;
        const indexOne = min + Math.floor(Math.random() * (maxOne - min));
        const indexTwo = min + Math.floor(Math.random() * (maxTwo - min));

        return adj[indexOne] + "-" + nouns[indexTwo];
    }

    handleSubmit(event) {
        event.preventDefault();

        // host=true, joined=false, room_name=roomId
        this.props.handleEntry(true, false, this.state.roomId);
        this.props.updateProcessing(false);
        //todo search and check for the room here, if found render the queue
        this.setState({
            showQueue: true
        });

    }

    render() {

        const { classes } = this.props;

        // todo create function to add a room to the database
        const roomId = this.state.roomId;

        if (this.state.showQueue){
            return (
                <Queue
                    isHost={true}
                />
            )
        }
        else{
            return (
                <MuiThemeProvider theme={THEME}>
                    <div className="join-page">
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <h1 className={classes.hostText}>Enter your code...</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <h2 className={classes.hostText} >Your code is '{roomId}'</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className={classes.hostBtn} variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
                            </Grid>
                        </Grid>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}
export default withStyles(styles)(Host)
