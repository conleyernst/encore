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

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

let id = 0;
function createData(title, artist, score) {
    id += 1;
    return { id, title, artist, score };
}

// const data = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const mockData = [
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
    {
        title: 'American Idiot',
        artist: 'Greenday',
        score: 5
    },
]

function SimpleTable(props) {
    const { classes } = props;


    let data = [];
    for (let i = 0; i < mockData.length; i++){
        const element = mockData[i];
        const obj = createData(element.title, element.artist, element.score);
        data.push(obj);
    }

    //todo have this as a prop passed in
    const { isHost } = props;

    const host = isHost.isHost


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Artist</TableCell>
                        <TableCell align="right">Score</TableCell>
                        {!host &&
                            <TableCell align="right">Vote</TableCell>
                        }
                        {host &&
                            <TableCell align="right">Veto</TableCell>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => (
                        <TableRow key={n.id}>
                            <TableCell component="th" scope="row">
                                {n.title}
                            </TableCell>
                            {/*<TableCell align="right">{n.title}</TableCell>*/}
                            <TableCell align="right">{n.artist}</TableCell>
                            <TableCell align="right">{n.score}</TableCell>
                            {!host &&
                                <TableCell align="right">
                                    <Button variant="contained" color="primary">Yee</Button>
                                    <Button variant="contained" color="primary">Nee</Button>
                                </TableCell>
                            }
                            {host &&
                                <TableCell align="right">
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
