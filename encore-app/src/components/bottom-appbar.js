import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    bottomAppBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

// function handleClick(){
//     console.log("click click!");
// }
//
//
// function BottomAppBar(props) {
//     const { classes } = props;
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <AppBar position="fixed" color="primary" className={classes.appBar}>
//                 <Toolbar className={classes.toolbar}>
//                     <IconButton color="inherit" aria-label="Open drawer">
//                         <MenuIcon />
//                     </IconButton>
//                     <Fab color="secondary" aria-label="Add" onClick={handleClick()} className={classes.fabButton}>
//                         <AddIcon />
//                     </Fab>
//                     <div>
//                         <IconButton color="inherit">
//                             <SearchIcon />
//                         </IconButton>
//                         <IconButton color="inherit">
//                             <MoreIcon />
//                         </IconButton>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </React.Fragment>
//     );
// }
//
// BottomAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(BottomAppBar);


class BottomAppBar extends React.Component {
    constructor(){
        super()

    }

    handleClick(){
        console.log("click click!");
    }

    render() {

        return (
            <div>
                <CssBaseline />
                <AppBar position="fixed" color="primary" className="bottomAppBar">
                    <Toolbar className="toolbar">
                        <IconButton color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Fab color="secondary" aria-label="Add" onClick={this.handleClick} className="fabButton">
                            <AddIcon />
                        </Fab>
                        <div>
                            <IconButton color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                 </AppBar>
            </div>
        );
    }
}

// NavTabs.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(BottomAppBar);

