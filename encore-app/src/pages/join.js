import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

import Queue from './queue'
import {withStyles} from "@material-ui/core/styles/index";
import TextField from "@material-ui/core/es/TextField/TextField";
import {extra_light_blue, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        color: extra_light_blue,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Join extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQueue: false,
            roomIdStr: '',
            roomIdValid: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isRoomValid = this.isRoomValid.bind(this)
    }


    isRoomValid(enteredStr){
        //todo check database for string name here, make is room valid false if nothing found
        return true;

    }

    handleSubmit(event) {
        event.preventDefault();

        // // this.props.updateProcessing(false);
        // this.props.handleEntry(false, true, 'happy cow');
        // this.props.updateProcessing(false);
        // // console.log('ASDFADFAF')

        //todo search and check for the room here, if found render the queue
        const enteredStr = this.state.roomIdStr;
        const valid = this.isRoomValid(enteredStr);

        if (valid){

            // host=false, joined=true, room_name=enteredStr
            this.props.handleEntry(false, true, enteredStr);
            this.props.updateProcessing(false);

            this.setState({
                showQueue: true
            });
        } else {
            //todo add invalid feedback here
        }

    }

    handleChange = (event) => {
        this.setState({
            roomIdStr: event.target.value
        });
    };

    render() {

        const { classes } = this.props;

        if (this.state.showQueue){
            return (
                <Queue
                    isHost={false}
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
                                <h2>Join your room!</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="standard-textarea"
                                    label="Room ID"
                                    placeholder="Enter Room ID"
                                    multiline
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={this.handleChange}
                                    varient="filled"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Go!</Button>
                            </Grid>
                        </Grid>
                    </div>
                </MuiThemeProvider>
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

export default withStyles(styles)(Join)
