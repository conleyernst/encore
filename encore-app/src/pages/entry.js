import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";
import axios from 'axios';
import {withStyles} from "@material-ui/core/styles/index";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { THEME } from '../encore-theme'
import { pink, extra_light_pink } from '../encore-theme'

const styles = theme => ({
    entryBtn: {
        margin: 20,
        // color: theme.palette.primary,
        color: extra_light_pink
    },
    entryH1: {
        color: pink
    },
});

//todo figure out how to export this better
// const theme = createMuiTheme({
//     palette: {
//         primary: { main: purple[500] }, // Purple and green play nicely together.
//         secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
//     },
//     typography: { useNextVariants: true },
// });

class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
        this.handleJoin = this.handleJoin.bind(this)
        this.handleHost = this.handleHost.bind(this)
        this.requestPlz = this.requestPlz.bind(this)

    }

    handleJoin(event) {
        event.preventDefault();
        this.props.handleEntry(false, true, '');
    }

    handleHost(event) {
        event.preventDefault();
        this.props.handleEntry(true, false, '');
    }

    // placeholder axios
    requestPlz(event) {
        axios.get('/songs/')
            .then(response => {
            console.log('Get song response: ')
            console.log(response.data)
            if (response.data) {
                console.log('Get Song : Success ')
                console.log(response.data)

                this.setState({
                    data: response.data, //todo manually getting first value of array, fix this so response only returns one object
                });
            } else {
                console.log('Get Song: failed');
                this.setState({
                    data: null
                })
            }
        })
        // axios.get('/song/').then(response => {
        //     console.log('Get song response: ')
        //     console.log(response.data)
        //     this.setState({
        //         data: response.data
        //     });
        // })
    }

    render() {
        const { classes } = this.props;
            return (
                <MuiThemeProvider theme={THEME}>
                <div className="entry-page">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <h1 className={classes.entryH1}>Welcome to Encore!</h1>
                        </Grid>
                        <Grid item xs={12}>
                                <Button size="large" className={classes.entryBtn} variant="contained" color="primary" onClick={this.handleJoin}>Join</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button size="large" className={classes.entryBtn} variant="contained" color="primary" onClick={this.handleHost}>Host</Button>
                        </Grid>
                        {/*<Grid item xs={6}>*/}
                            {/*<Button variant="contained" color="primary" onClick={this.handleHost}>Host</Button>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12}>*/}
                            {/*<Button variant="contained" color="primary" onClick={this.requestPlz}>CLICK</Button>*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
                </MuiThemeProvider>
            )
        }
}

export default withStyles(styles)(Entry)
