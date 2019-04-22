import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {THEME, blue} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";

const axios = require('axios');


const styles = theme => ({
    songTxt: {
        color: blue,
    },
    // fab: {
    //     margin: theme.spacing.unit,
    //     bottom: 0,
    //     right: 0,
    //     position: 'absolute',
    //     color: extra_light_pink,
    // },
});

class AddSongDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            song: 'foo',
            token: '',
        };
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    // componentDidMount(){
    //
    //     this.setState({
    //         token: this.props.token
    //     });
    // }

    // onChange={this.handleChange('name')}

    makeSongId(songName){
       let songId = songName;
       songId = songId.trim().toLowerCase();
       songId = songId.replace(/\s+/g, '');
       return songId;
    }

    handleChange = (event) => {
        this.setState({
            song: event.target.value
        });
    };

    handleClickOpen = () => {
        this.setState({
            token: this.props.token
        }, () => this.props.updateModalState({
            modalIsOpen: true,
        }));
        // this.props.updateModalState({
        //     modalIsOpen: true,
        // });
    };

    handleClose = () => {
        this.props.updateModalState({
            modalIsOpen: false,
        });
    };

    handleSubmit = () => {
        const songName = this.state.song;
        const songId = this.makeSongId(songName);

        //todo perform fetching logic here to get spotify object, save spotify id as songID

        const songObject = {
            spotify_id: songId,
            title: '',
            artist: '',
            cover_art: '',
            runtime: 0,
            votes: 0
        }
        axios.post('/songs/add', songObject)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log('create song error: ')
                console.log(error)
            });
        this.handleClose();
    };

    render() {

        const { classes } = this.props;
        const { token } = this.props;
        //
        // console.log("TOKEN BABY: " + token);
        console.log(token)
        console.log(this.state.token);

        return (
            <MuiThemeProvider theme={THEME}>
                <Dialog
                    open={this.props.isOpen}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Song</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Type the name of the song you would like to add to the queue!
                        </DialogContentText>
                        <TextField
                            // className={classes.songTxt}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Song Title"
                            placeholder="Add Song Title"
                            // type="email"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="secondary">
                            <strong>Submit</strong>
                        </Button>
                    </DialogActions>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(AddSongDialog);
// export default AddSongDialog
