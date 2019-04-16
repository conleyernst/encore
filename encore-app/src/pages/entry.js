import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foo: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleJoin = this.handleJoin.bind(this)

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

    handleJoin(event) {
        event.preventDefault();
        const str = 'sick-bro';
        this.props.handleEntry(false, true, str);
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
                            <Button variant="contained" color="primary">Host</Button>
                        </Grid>
                    </Grid>
                </div>
            )
        }
}

export default Entry
