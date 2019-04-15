import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Entry extends Component {
    constructor() {
        super()
        this.state = {
            foo: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

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

    render() {
            return (
                <div>
                   <p>entry!</p>
                    <p>entry!</p>
                    <p>entry!</p>
                    <p>entry!</p>
                </div>
            )
        }
}

export default Entry
