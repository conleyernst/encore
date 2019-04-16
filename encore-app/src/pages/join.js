import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

import Queue from './queue'

class Join extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQueue: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        //todo search and check for the room here, if found render the queue
        this.setState({
                showQueue: true
            });

    }

    render() {

        if (this.state.showQueue){
            return (
                <Queue
                    isHost={false}
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
                            <p>enter code here...</p>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
                        </Grid>
                    </Grid>
                </div>
            )
        }


        // return (
        //     <div className="entry-page">
        //         <Grid
        //             container
        //             direction="row"
        //             justify="center"
        //             alignItems="center"
        //         >
        //             <Grid item xs={12}>
        //                 <h2>Enter your code...</h2>
        //             </Grid>
        //             <Grid item xs={6}>
        //                 <p>enter code here...</p>
        //             </Grid>
        //             <Grid item xs={6}>
        //                 <Button variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
        //             </Grid>
        //         </Grid>
        //     </div>
        // )
    }
}

export default Join
