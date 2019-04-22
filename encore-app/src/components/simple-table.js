import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/es/Button/Button";
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import {black, blue, extra_dark_gray} from "../encore-theme";


const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        // minWidth: 700,
        padding: 10,
        backgroundColor: extra_dark_gray,
    },
    voteBtn: {
        margin: 10,
    },
    songContainer: {
        display: 'block',
    },
    songTitle: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
            fontStyle: 'bold',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 20,
        },
    },
    songArtist: {
        fontSize: 15,
    },
    songVotes: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
            textAlign: 'right',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25,
        },
    },
    tableHeader: {
        fontFamily:  "Bowlby One SC",
        color: blue,
        textShadow: '5px 10px 18px rgba(0,0,0,0.2)',
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25,
        },
    },
    tableCell: {
        paddingRight: 0,
        fontSize: 25,
    }

});

class SimpleTable extends React.Component {
    constructor(props){
        super(props);

        this.handleDownVote = this.handleDownVote.bind(this)
        this.handleUpVote = this.handleUpVote.bind(this)
        this.handleTableVeto = this.handleTableVeto.bind(this)
    }

    handleDownVote(songObj){
        this.props.handleVote(songObj, false)
        this.props.reRender();
    }

    handleUpVote(songObj){
        this.props.handleVote(songObj, true)
        this.props.reRender();
    }

    handleTableVeto(songObj){
        this.props.handleVeto(songObj)
        this.props.reRender();
    }


    render() {

        const { classes } = this.props;

        let data = [];

        //todo have this as a prop passed in
        const { isHost, fetchedData, isMobile } = this.props;

        data = fetchedData;

        const host = isHost.isHost //shitty debug but hey at least it works

        if(isMobile){
            return (
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader} align="center">Song</TableCell>
                                {!host &&
                                <TableCell className={classes.tableHeader} align="center">Vote</TableCell>
                                }
                                {host &&
                                <TableCell className={classes.tableHeader} align="center">Veto</TableCell>
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map(n => (
                                <TableRow key={n._id}>
                                    <TableCell className={classes.tableCell} align="left" component="th" scope="row">
                                        <div className={classes.songContainer}>
                                            <div className={classes.songTitle}>
                                                <strong>{n.title}</strong>
                                            </div>
                                            <div className={classes.songArtist}>
                                                {n.artist}
                                            </div>
                                            <div className={classes.songVotes}>
                                                {n.votes}
                                            </div>
                                        </div>
                                    </TableCell>
                                    {!host &&
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => this.handleUpVote(n)}
                                            className={classes.voteBtn}
                                            variant="contained"
                                            color="primary"
                                        >
                                            <ThumbUp />
                                        </Button>
                                        <Button
                                            onClick={() => this.handleDownVote(n)}
                                            className={classes.voteBtn}
                                            variant="contained"
                                            color="primary"
                                        >
                                            <ThumbDown/>
                                        </Button>
                                    </TableCell>
                                    }
                                    {host &&
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => this.handleTableVeto(n)}
                                            variant="contained"
                                            color="primary"
                                        >
                                            Veto
                                        </Button>
                                    </TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            );
        }
        else {
            return(
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader} align="center">Song</TableCell>
                                <TableCell className={classes.tableHeader} align="center">Score</TableCell>
                                {!host &&
                                <TableCell className={classes.tableHeader} align="center">Vote</TableCell>
                                }
                                {host &&
                                <TableCell className={classes.tableHeader} align="center">Veto</TableCell>
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map(n => (
                                <TableRow key={n._id}>
                                    <TableCell className={classes.tableCell} align="left" component="th" scope="row">
                                        <div className={classes.songContainer}>
                                            <div className={classes.songTitle}>
                                                {n.title}
                                            </div>
                                            <div className={classes.songArtist}>
                                                {n.artist}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className={classes.songVotes} align="center">{n.votes}</TableCell>
                                    {!host &&
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => this.handleUpVote(n)}
                                            className={classes.voteBtn}
                                            variant="contained"
                                            color="primary"
                                        >
                                            <ThumbUp />
                                        </Button>
                                        <Button
                                            onClick={() => this.handleDownVote(n)}
                                            className={classes.voteBtn}
                                            variant="contained"
                                            color="primary"
                                        >
                                            <ThumbDown/>
                                        </Button>
                                    </TableCell>
                                    }
                                    {host &&
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => this.handleTableVeto(n)}
                                            variant="contained"
                                            color="primary"
                                        >
                                            Veto
                                        </Button>
                                    </TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            );
        }
    }
}

export default withStyles(styles)(SimpleTable);
