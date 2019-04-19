import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        bottom: 0,
        right: 0,
        position: 'absolute',
    },
});

function onClick(event){

    console.log('click!')
}

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
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClick}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(FloatingAddButton);
