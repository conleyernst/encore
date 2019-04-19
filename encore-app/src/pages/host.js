import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

import Queue from './queue'

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

class Host extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQueue: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.generateRoomId = this.generateRoomId.bind(this)
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

        this.props.updateProcessing(false);

        //todo search and check for the room here, if found render the queue
        this.setState({
            showQueue: true
        });

    }

    render() {

        // todo create function to add a room to the database
        const roomId = this.generateRoomId();

        if (this.state.showQueue){
            return (
                <Queue
                    isHost={true}
                />
            )
        }
        else{
            return (
                <div className="join-page">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <h2>Enter your code...</h2>
                        </Grid>
                        <Grid item xs={6}>
                            <p>Your code is '{roomId}'</p>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Host
