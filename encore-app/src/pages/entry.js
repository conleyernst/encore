import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";
import axios from 'axios';


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
        const str = 'sick-bro';
        this.props.handleEntry(false, true, str);
    }

    handleHost(event) {
        event.preventDefault();
        const str = 'wow';
        this.props.handleEntry(true, false, str);
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
            return (
                <div className="entry-page">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <h2>Encore</h2>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" onClick={this.handleJoin}>Join</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" onClick={this.handleHost}>Host</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.requestPlz}>CLICK</Button>
                        </Grid>
                    </Grid>
                </div>
            )
        }
}

export default Entry
