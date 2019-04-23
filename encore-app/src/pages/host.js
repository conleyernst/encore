import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";

import Queue from './queue'
import {blue, extra_light_blue, extra_light_pink, pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";

var scopes = 'user-read-private user-read-email';
const URL = 'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + 'f73f2a98b84e4d399b54992b7f548173' +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent('http://localhost:3000');

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
    hostCode: {
        color: pink,
        fontFamily: "Ubuntu",
        // fontFamily: "Bowlby One SC",
        fontSize: 40,
    },
    hostText: {
        color: blue,
        fontFamily: "Bowlby One SC",
        fontSize: 30,
    },
    hostBtn: {
        margin: 20,
        // color: theme.palette.primary,
        color: extra_light_pink
    },
    hostPage: {
        width: 500,
        height: 400,
        // backgroundColor: pink,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 70, //todo debug offset
        right: 0,
        margin: 'auto',
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
                    <div className={classes.hostPage}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <h1 className={classes.hostText}>Your Party Code is:</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <h2 className={classes.hostCode} >'{roomId}'</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <Button size="large" className={classes.hostBtn} variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
                            </Grid>
                            {myBool &&
                                <Grid item xs={12}>
                                    <Link to={window.location = URL}
                                          className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                    </Link>
                                </Grid>
                            }
                        </Grid>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}
export default withStyles(styles)(Host)
