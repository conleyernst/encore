import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {blue, extra_dark_gray, extra_light_blue, extra_light_pink, pink, purple, THEME} from "../encore-theme";
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
    card: {
        maxWidth: 300,
        alignItems: 'center',
        backgroundColor: extra_dark_gray,
    },
    media: {
        objectFit: 'cover',
    },
    nowPlaying: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 25,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 30,
        },
        color: pink,
        fontSize: 30,
        fontFamily: "Bowlby One SC",
        textShadow: '5px 10px 18px rgba(0,0,0,0.2)',
    },
    songTitle:{
        color: extra_light_blue,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25,
        },
    },
    songArtist: {
        color: extra_light_blue,
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 20,
        },
    },
});

class NowPlayingCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        const { imgUrl, artist, title, isMobile } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    {!isMobile &&
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            image={imgUrl}
                            title="Contemplative Reptile"
                        />
                    }
                    <CardContent>
                        <Typography className={classes.nowPlaying} align="center" gutterBottom variant="h6" component="h2">
                            Now Playing
                        </Typography>
                        <Typography className={classes.songTitle} align="left" gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.songArtist} align="left" gutterBottom variant="h6" component="h2">
                            {artist}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(NowPlayingCard);
