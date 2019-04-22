import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {extra_light_pink, THEME} from "../encore-theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";



const styles = theme => ({
    fab: {
        margin: 20,
        bottom: 0,
        right: 0,
        position: 'absolute',
        color: extra_light_pink,
    },
});

class FloatingAddButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        this.props.updateModalState({
            modalIsOpen: true
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <MuiThemeProvider theme={THEME}>
                    <Fab size="large" color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClick}>
                        <AddIcon />
                    </Fab>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(FloatingAddButton);
