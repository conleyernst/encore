import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import {blue, extra_light_blue, pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";


const styles = theme => ({
    snack: {
        backgroundColor: blue,
    }

});

class FadeSnackbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
    }

    handleOpen = () => {
        this.props.updateSnackbarState({
            isSnackOpen: true,
        });
    };

    handleClose = () => {
        this.props.updateSnackbarState({
            isSnackOpen: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { isOpen, text } = this.props;
        return (
            <MuiThemeProvider theme={THEME}>
                <div>
                    {/*<Button onClick={this.handleClick}>Open with Fade Transition</Button>*/}
                    <Snackbar
                        color="primary"
                        className={classes.snackbar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        autoHideDuration={3000}
                        open={isOpen}
                        onClose={this.handleClose}
                        TransitionComponent={Fade}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{text}</span>}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(FadeSnackbar);
