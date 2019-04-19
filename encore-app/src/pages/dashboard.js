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
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from '../components/list-items';
import SimpleTable from '../components/simple-table';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';


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
    },
    roomName: {
        flexGrow: 1,
        textAlignLast: 'end',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
});

class Dashboard extends React.Component {
    state = {
        open: true,
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

    updateModalState = (modalObj) => {
        this.setState(modalObj)
    }

    handleEntry = (host, joined, room_string) => {
        this.updateProcessing(true)
        this.updateStates(host, joined, room_string);
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
        const { host, joined, room_name} = this.props;

        let loggedIn = false;
        if (!this.state.processing){
            if (host || joined){
                loggedIn = true;
            }
        }

        return (
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
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Dashboard
                        </Typography>

                        {loggedIn &&
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.roomName}
                            >
                               Your Group Name: {room_name}
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
                    <Divider />
                    <List>
                        {loggedIn &&
                            <ListItem button onClick={this.handleLeave}>
                                <ListItemIcon>
                                    <LayersIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Leave Group"/>
                            </ListItem>
                        }
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <LayersIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>

                <AddSongDialog
                    isOpen={this.state.modalIsOpen}
                    updateModalState={this.updateModalState}
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
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
