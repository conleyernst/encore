import React from 'react';
import PropTypes from 'prop-types';
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


const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        padding: 10,
    },
    voteBtn: {
        margin: 10,
    },
};

function SimpleTable(props) {
    const { classes } = props;

    let data = [];

    //todo have this as a prop passed in
    const { isHost, fetchedData } = props;

    data = fetchedData;

    const host = isHost.isHost //shitty debug but hey at least it works


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Artist</TableCell>
                        <TableCell align="center">Score</TableCell>
                        {!host &&
                            <TableCell align="center">Vote</TableCell>
                        }
                        {host &&
                            <TableCell align="center">Veto</TableCell>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map(n => (
                        <TableRow key={n._id}>
                            <TableCell align="left" component="th" scope="row">
                                {n.title}
                            </TableCell>
                            {/*<TableCell align="right">{n.title}</TableCell>*/}
                            <TableCell align="center">{n.artist}</TableCell>
                            <TableCell align="center">{n.score}</TableCell>
                            {!host &&
                                <TableCell align="center">
                                    <Button className={classes.voteBtn} variant="contained" color="primary">
                                        <ThumbUp />
                                    </Button>
                                    <Button className={classes.voteBtn} variant="contained" color="primary">
                                        <ThumbDown/>
                                    </Button>
                                </TableCell>
                            }
                            {host &&
                                <TableCell align="center">
                                    <Button variant="contained" color="primary">Veto</Button>
                                </TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
