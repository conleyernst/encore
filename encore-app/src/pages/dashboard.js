import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import NotInterested from '@material-ui/core/NotInterested';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from '../components/list-items';
import SimpleTable from '../components/simple-table';
import Help from '@material-ui/icons/Help';
import NotInterested from '@material-ui/icons/NotInterested';
import AddIcon from '@material-ui/icons/Add';
import Brightness1 from '@material-ui/icons/Brightness1';


import Entry from './entry'
import Queue from './queue'
import Host from './host'
import Join from './join'
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

import BottomAppBar from '../components/bottom-appbar';
import FloatingActionButtons from '../components/float-button';
import AddSongDialog from "../components/add-song-dialog";

import {blue, dark_blue, pink, purple, THEME} from '../encore-theme'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const topbarColor = dark_blue;
const topbarText = blue;

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: topbarColor,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        color: pink,
        fontFamily: "Bowlby One SC",
    },
    roomName: {
        flexGrow: 1,
        textAlignLast: 'end',
        color: topbarText,
        fontFamily: "Bowlby One SC",
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: blue,
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
        paddingTop: '60px',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
    bottomBar: {
        top: 'auto',
        bottom: 0,
    },
    searchBar: {
        flexGrow: 1,
        textAlignLast: 'end',
    },
    encoreBrand: {
        fontFamily: "Bowlby One SC",
        color: dark_blue,
    },
});

class Dashboard extends React.Component {
    state = {
        open: false,
        processing: false,
        modalIsOpen: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    updateStates(host, joined, room_string) {

        this.props.updateStates({
            host: host,
            joined: joined,
            room_string: room_string
        })
    }

    updateAuth(token){
        this.props.updateAuth({
            token: token
        })
    }

    getToken = (token) => {
        this.updateAuth(token);
    }

    updateModalState = (modalObj) => {
        this.setState(modalObj)
    }

    handleEntry = (host, joined, room_string) => {
        this.updateProcessing(true)
        this.updateStates(host, joined, room_string);
    }

    handleRedirect = (bool) => {
        this.updateRedirect(bool);
    }

    updateRedirect(bool){
        this.props.updateRedirect({
            redirect: bool
        })
    }

    updateProcessing = (bool) => {
        this.setState({ processing: bool });
    }

    handleLeave = () => {
        this.updateStates(false, false, '')
    }

    pageContent(){
        const { classes } = this.props;
        const { host, joined, room_name} = this.props;

        if (host){
            //add host page
            return(
                <div className={classes.appBarSpacer}>
                    <Typography>
                        <Host
                            updateProcessing={this.updateProcessing}
                            handleEntry={this.handleEntry}
                        />
                    </Typography>
                </div>
            )
        }
        else if (joined){
            return(
                <div className={classes.appBarSpacer}>
                    <Typography>
                        <Join
                            updateProcessing={this.updateProcessing}
                            handleEntry={this.handleEntry}
                        />
                    </Typography>
                </div>
            )
        }
        else{
            return (
                <div className={classes.appBarSpacer}>
                    <Typography>
                        <Entry
                            handleEntry={this.handleEntry}
                        />
                    </Typography>
                </div>
            )
        }
    }

    render() {


        const { classes } = this.props;
        const { host, joined, room_name, token} = this.props;

        let loggedIn = false;
        if (!this.state.processing){
            if (host || joined){
                loggedIn = true;
            }
        }

        return (
            <MuiThemeProvider theme={THEME}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden,
                                )}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h4"
                                color="inherit"
                                noWrap
                                className={classes.title}
                            >
                                Encore
                            </Typography>

                            {loggedIn &&
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    color="inherit"
                                    noWrap
                                    className={classes.roomName}
                                >
                                    {room_name}
                                </Typography>
                            }
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <List>
                            <Divider />
                            {loggedIn &&
                                <ListItem button onClick={this.handleLeave}>
                                    <ListItemIcon>
                                        <NotInterested />
                                    </ListItemIcon>
                                    <ListItemText className={classes.test} primary="Leave Group"/>
                                </ListItem>
                            }
                            <ListItem button>
                                <ListItemIcon>
                                    <Help />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                        </List>
                    </Drawer>

                    <AddSongDialog
                        isOpen={this.state.modalIsOpen}
                        updateModalState={this.updateModalState}
                        getToken={this.getToken}
                        token={token}
                    />

                    <main className={classes.content}>
                        {this.pageContent()}
                    </main>

                    <FloatingActionButtons
                        updateModalState={this.updateModalState}
                    />
                    {/*<BottomAppBar*/}
                        {/*updateModalState={this.updateModalState}*/}
                    {/*/>*/}
                </div>
            </MuiThemeProvider>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
